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


// Create a Model based on the User Schema
const User = mongoose.model('User', userSchema);


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
