const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require('dotenv').config()
const app = express();
const port =  3050;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.send('Express Nodemailer');
})

app.post('/getdata', (req, res, next) =>{
	res.status(200).
	json({ message: `${req.body.message}`,
	 		user: `${req.body.user}`
	 		});
	console.log(req.body);
})

app.post('/', async (req,res) => {

	const requestData = req.body;
	const userData = {
		to: req.body.email,
		subject: req.body.subject,
	}

	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport({
	host: "smtpout.secureserver.net",  
    service: 'Godaddy',
    secureConnection: true, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
	auth: {
		user: process.env.PERSONAL_USERNAME,
		pass: process.env.PERSONAL_PASSWORD
	}
});

	  // send mail with defined transport object
	  const message = await transporter.sendMail({
	    from: 'from-email', // sender address
	    to: requestData.email, // list of receivers (reciever address)
	    subject: 'Hello', // Subject line
	    // text: "Hello world", // plain text body
	    html: "<b>Thanks for subscribing!</b>", // write html template for the email
	  });

	  transporter.sendMail(message).then(() => {
            console.log(`Email sent successfully to ${requestData.email}`);
            res.status(200).json({ message: `Email sent successfully to ${requestData.email}` });
        }).catch((err) => {
            console.log('Failed to send email');
            console.error(err);
        });

})

app.listen(port, () => console.log(`App listening in port http://localhost:${port}`))