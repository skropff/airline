/*
app.post('/webhook/check-flights', (req, res) => {
    // Extract the variable exactly as named in your Phonely chart
    const cityOrAirport = req.body.city_airport;

    // Log it to your terminal console so you can see it working
    console.log("Extracted Value:", cityOrAirport);

    // Send a success response back to Phonely to keep the call moving
    return res.status(200).json({ received: true });
});
*/
/*
import express from 'express';

const app = express();

// This middleware allows your server to read incoming JSON data from Phonely
app.use(express.json());

// Your extraction code route block
app.post('/webhook/check-flights', (req, res) => {
    // Extract the variable exactly as named in your Phonely chart
    const cityOrAirport = req.body.city_airport;

    // Log it to your terminal console so you can see it working
    console.log("Extracted Value:", cityOrAirport);

    // Send a success response back to Phonely to keep the call moving
    return res.status(200).json({ received: true });
});

// Start the server listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Airline Webhook Server running on port ${PORT}`);
});
*/
/*
const express = require('express');

const app = express();

// Middleware to read incoming JSON data from Phonely
app.use(express.json());

// Your extraction code route block
app.post('/webhook/check-flights', (req, res) => {
    const cityOrAirport = req.body.city_airport;

    console.log("Extracted Value:", cityOrAirport);

    return res.status(200).json({ received: true });
});

// Start the server listening on port 3000
/*
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Airline Webhook Server running on port ${PORT}`);
});
*/

/*
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server active on port ${PORT}`));

*/
/*
const express = require('express');
const app = express();

// Crucial: Allows Express to parse JSON blocks natively
app.use(express.json());

// Your matching extraction route block
app.post('/webhook/check-flights', (req, res) => {
    // 1. Extract the payload sent by Phonely
    const cityOrAirport = req.body.city_airport;

    // 2. Log it to your terminal screen for verification
    console.log("-----------------------------------------");
    console.log("Incoming Webhook Triggered!");
    console.log("Extracted Value:", cityOrAirport);
    console.log("-----------------------------------------");

    // 3. FIX: Send a valid JSON response object so the test runner passes
    return res.status(200).json({ 
        success: true, 
        message: `Successfully received city value: ${cityOrAirport}` 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Airline Webhook Server running on port ${PORT}`);
});
*/

const express = require('express');
const app = express();

// Parse JSON payload structures natively
app.use(express.json());

// Your matching extraction path route block
app.post('/webhook/check-flights', (req, res) => {
    const cityOrAirport = req.body.city_airport;

    console.log("-----------------------------------------");
    console.log("Incoming Webhook Triggered!");
    console.log("Extracted Value:", cityOrAirport);
    console.log("-----------------------------------------");

    // Send a valid JSON response object back to Phonely
    return res.status(200).json({ 
        success: true, 
        message: `Successfully received city value: ${cityOrAirport}` 
    });
});

// FIX: Force it to prioritize Render's variable. Do not hardcode 3000.
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Airline Webhook Server running on port ${PORT}`);
});
