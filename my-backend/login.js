import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8001;
const MONGO_URL = 'mongodb://localhost:27017/dbconnect';

// Connect to MongoDB with specific database
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('MongoDB connected successfully to dbconnect database');
        // Log available collections
        mongoose.connection.db.listCollections().toArray((err, collections) => {
            if (err) {
                console.log('Error getting collections:', err);
            } else {
                console.log('Available collections:', collections.map(c => c.name));
            }
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Define Schema for Login data
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'login' }); // Explicitly specify collection name

// Create a Model based on the Login Schema
const Login = mongoose.model('Login', loginSchema);

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Received login request for email:', email);

        // Find user by email
        const user = await Login.findOne({ email });
        console.log('Existing user found:', user ? 'Yes' : 'No');

        if (!user) {
            console.log('Creating new user...');
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Create new user
            const newUser = new Login({
                email,
                password: hashedPassword
            });

            // Save user to database
            await newUser.save();
            console.log('New user saved successfully');

            // Create JWT token
            const token = jwt.sign(
                { userId: newUser._id },
                process.env.JWT_SECRET || 'yourSecretKey',
                { expiresIn: '1h' }
            );

            return res.status(201).json({
                message: 'User registered successfully',
                token
            });
        }

        // If user exists, verify password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match:', isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create and send JWT token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET || 'yourSecretKey',
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: 'Login successful',
            token
        });

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get all users endpoint (for testing)
app.get('/users', async (req, res) => {
    try {
        const users = await Login.find({}, { password: 0 }); // Exclude password field
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Auth server running on port ${PORT}`);
    console.log(`Connected to database: dbconnect`);
    console.log(`Using collection: login`);
});