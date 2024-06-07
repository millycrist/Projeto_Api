const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your-email@example.com',
        pass: 'your-password'
    }
});

module.exports = transporter;
