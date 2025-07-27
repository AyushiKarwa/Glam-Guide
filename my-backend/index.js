import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); // Load environment variables from .env file

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Serve static files from the project root (flat structure)
app.use(express.static(path.join(__dirname, '..')));

// Get environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/dbconnect';

// Connect to MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Define Schema for User data
// Define Schema for User data
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Ensures that this field is required
    },
    color: {
        type: String,
        required: true // Ensures that this field is required
    },
    season: {
        type: String,
        required: true // Ensures that this field is required
    },
    material: {
        type: String,
        required: true // Ensures that this field is required
    }
});

// Define Schema for Authentication Users
const authUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a Model based on the User Schema
const User = mongoose.model('User', userSchema);
const AuthUser = mongoose.model('AuthUser', authUserSchema);

// Authentication Routes
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const existingUser = await AuthUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const newAuthUser = new AuthUser({
            name,
            email,
            password // In production, you should hash this password
        });
        
        await newAuthUser.save();
        res.status(200).json({ message: 'Signup successful! Please log in.' });
    } catch (err) {
        res.status(500).json({ message: 'Error during signup', error: err });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await AuthUser.findOne({ email, password });
        if (user) {
            res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error during login', error: err });
    }
});

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await AuthUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const newAuthUser = new AuthUser({
            name: email.split('@')[0], // Use email prefix as name
            email,
            password
        });
        
        await newAuthUser.save();
        res.status(200).json({ message: 'Registration successful', token: 'dummy-token' });
    } catch (err) {
        res.status(500).json({ message: 'Error during registration', error: err });
    }
});

app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    
    try {
        const user = await AuthUser.findOne({ email });
        if (user) {
            res.status(200).json({ message: 'A password reset link has been sent to your email.' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error during password reset', error: err });
    }
});

// Route to save user data (POST)
app.post('/users', async (req, res) => {
    const { name, color, season, material } = req.body;

    const newUser = new User({
        name,
        color,
        season,
        material
    });
    

    try {
        await newUser.save();
        res.status(200).json({ message: 'User added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving user data', error: err });
    }
});

// Route to get all users (GET)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
