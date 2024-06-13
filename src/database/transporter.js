const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'milenahosan99@gmil.com',
        pass: '1809*Milly'
    }
});

module.exports = transporter;
