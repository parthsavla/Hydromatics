// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log('API route hit');
    if (req.method === 'POST')
    {
        const { name, email, subject, message } = req.body;

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // use your email service provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // your email address to receive the emails
            subject: `Contact Form Submission: ${subject}`,
            text: `You have a new message from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
        };

        try
        {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error)
        {
            console.error(error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else
    {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
