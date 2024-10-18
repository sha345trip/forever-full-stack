import express from 'express';
import axios from 'axios';

const metaRouter = express.Router();

// Replace with your Meta Pixel ID and Access Token from Meta
const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

// POST route to receive and send events to Meta
metaRouter.post('/event', async (req, res) => {
    const { data } = req.body;  // Extract 'data' array from request body

    if (!data || data.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid event data" });
    }

    const event = data[0];  // Assume only one event is sent, adjust if needed
    const { event_name, event_time, user_data, custom_data } = event;

    try {
        const response = await axios.post(
            `https://graph.facebook.com/v17.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                data: [
                    {
                        event_name: event_name,
                        event_time: event_time || Math.floor(new Date() / 1000), // Use current time if not provided
                        user_data: user_data,  // Example: hashed email, phone
                        action_source: "website", // Always 'website' for CAPI
                        custom_data: custom_data  // Example: { value: 100, currency: "USD" }
                    },
                ],
            }
        );

        res.json({ success: true, response: response.data });
    } catch (error) {
        console.error("Meta CAPI Error:", error.message);
        res.status(500).json({ success: false, message: "Failed to send event" });
    }
});

export default metaRouter;
