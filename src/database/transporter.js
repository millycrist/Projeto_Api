const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORTA,
  secure:false, // Convertendo para booleano
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  }
});

module.exports = transporter;