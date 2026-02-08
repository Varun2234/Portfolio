const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST']
}));
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation
const validateContact = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name too short'),
  body('email').isEmail().withMessage('Invalid email'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject too short'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message too short')
];

// Contact endpoint - EMAIL ONLY
app.post('/api/contact', validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: errors.array()[0].msg });
    }

    const { name, email, subject, message } = req.body;

    // Send to you
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
      `
    });

    // Auto-reply
    await transporter.sendMail({
      from: `"Gonugutla Varun" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you, ${name}!`,
      html: `<p>Hi ${name}, I received your message and will reply soon.</p>`
    });

    res.json({ success: true, message: 'Sent successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});