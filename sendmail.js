var nodemailer = require('nodemailer');
require('dotenv').config()

var transporter = nodemailer.createTransport({
	host: "smtpout.secureserver.net",  
    service: 'Godaddy',
    secureConnection: true, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
	auth: {
		user: process.env.PERSONAL_USERNAME,
		pass: process.env.PERSONAL_PASSWORD
	}
});

var mailOptions = {
	from: 'from-email', // replace with your email ID
	to: 'to-email', // replace with the recipient email ID
	subject: 'Sending mail using Nodemailer and ExpressJS',
	text: `Message from Nodemailer and ExpressJS`,
    html: "<b>Thanks for subscribing!</b>", // write html template for the email
};

transporter.sendMail(mailOptions).then(() => {
            console.log('Email sent successfully');
        }).catch((err) => {
            console.log('Failed to send email');
            console.error(err);
        });