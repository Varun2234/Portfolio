const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();

// Middleware - CORS (allow all for now)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check
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

// Email transporter - FIXED for Render
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email transporter error:', error.message);
  } else {
    console.log('✅ Email transporter ready');
  }
});

// Validation - FIXED with error messages
const validateContact = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('subject').trim().isLength({ min: 5 }).withMessage('Subject must be at least 5 characters'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters')
];

// Contact endpoint
app.post('/api/contact', validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ 
        success: false, 
        error: errors.array()[0].msg 
      });
    }

    const { name, email, subject, message } = req.body;
    console.log('Received contact form:', { name, email, subject });

    // Send email to you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: #ffffff; padding: 30px; border-radius: 10px; border: 2px solid #00d4ff;">
          <h2 style="color: #00d4ff; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">New Message Received</h2>
          <p><strong style="color: #00ffcc;">Name:</strong> ${name}</p>
          <p><strong style="color: #00ffcc;">Email:</strong> ${email}</p>
          <p><strong style="color: #00ffcc;">Subject:</strong> ${subject}</p>
          <div style="background: #111827; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00d4ff;">
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8;">Received on ${new Date().toLocaleString()}</p>
        </div>
      `
    });

    // Send auto-reply to sender
    await transporter.sendMail({
      from: `"Gonugutla Varun" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0e1a; color: #ffffff; padding: 30px; border-radius: 10px; border: 2px solid #00d4ff;">
          <h2 style="color: #00d4ff;">Thank You!</h2>
          <p>Hi <strong style="color: #00ffcc;">${name}</strong>,</p>
          <p>I've received your message regarding "<em>${subject}</em>" and will get back to you soon.</p>
          <p style="color: #94a3b8; font-size: 12px;">This is an automated response.</p>
        </div>
      `
    });

    console.log('✅ Emails sent successfully');
    res.json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('❌ Email error:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email: ' + error.message 
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_TO || 'Not set'}`);
});