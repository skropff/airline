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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server active on port ${PORT}`));

