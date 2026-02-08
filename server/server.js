const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Health check (MUST be before other routes)
app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    email: process.env.EMAIL_USER ? 'Configured' : 'Not configured'
  });
});

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Validation
const validateContact = [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail(),
  body('subject').trim().isLength({ min: 5 }),
  body('message').trim().isLength({ min: 10 })
];

// Contact endpoint
app.post('/api/contact', validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, error: 'Invalid input' });
    }

    const { name, email, subject, message } = req.body;

    // Send to you
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact: ${subject}`,
      html: `<h2>From: ${name}</h2><p>Email: ${email}</p><p>${message}</p>`
    });

    // Auto-reply
    await transporter.sendMail({
      from: `"Gonugutla Varun" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you, ${name}!`,
      html: `<p>I received your message and will reply soon.</p>`
    });

    res.json({ success: true, message: 'Sent!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to send' });
  }
});

// IMPORTANT: Use 0.0.0.0 to bind to all interfaces
const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email: ${process.env.EMAIL_TO || 'Not set'}`);
});