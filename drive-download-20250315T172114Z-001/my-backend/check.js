import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Get environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/dbconnect';

// Connect to MongoDB
mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Define Schema for Outfit data
const outfitSchema = new mongoose.Schema({
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

// Create a Model based on the Outfit Schema
const Outfit = mongoose.model('Outfit', outfitSchema);

// Route to save outfit data (POST)
app.post('/outfits', async (req, res) => { // Change to '/outfits' for storing outfit data
    const { name, color, season, material } = req.body;

    const newOutfit = new Outfit({
        name,
        color,
        season,
        material
    });

    try {
        await newOutfit.save();
        res.status(200).json({ message: 'Outfit added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving outfit data', error: err });
    }
});

// Route to get outfits by season (GET)
app.get('/outfits/:season', async (req, res) => { // Change to '/outfits' for fetching outfits by season
    const { season } = req.params;

    try {
        const outfits = await Outfit.find({ season });
        res.status(200).json(outfits);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching outfits', error: err });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
