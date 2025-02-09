// app/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // --- Basic Input Validation (Important!) ---
      if (!data.name || !data.email || !data.message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      if (typeof data.name !== 'string' || typeof data.email !== 'string' || typeof data.message !== 'string') {
          return res.status(400).json({ message: 'Invalid input types' });
      }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }


      // --- Process the form data (e.g., send an email) ---
      // ** Replace this with your actual email sending logic **
      console.log('Received form data:', data); // Log the data (for testing)

      // In a real application, you would send an email here.
      // For example, using Nodemailer, SendGrid, or another email service.
      // This example just simulates sending an email.

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

      // --- Send a success response ---
      res.status(200).json({ message: 'Message sent successfully!' });

    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}