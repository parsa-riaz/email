# Express-Nodemailer
Send emails through Express.js and Nodemailer package in Node.js

This project contains settings for GoDaddy server.

Refer this [Nodemailer](https://nodemailer.com/) website for other server providers like gmail, hotmail, etc

# Using sendmail.js
* You can send emails without ExpressJs.
* Run `node sendmail.js` inside the current directory.

# Using server.js
* You can create a express server, access API using postman and send emails.
* Run `npm install` to install all necessary packages.
* Run `npm start` inside the current directory to start the express server.
* Run `npm run dev` inside the current directory to start the express server using nodemon.
* Default port is `3050`. You can change it anytime.
* Refer to the test data below using postman.

### Configuring `.env` file
* Create a file inside the directory and name it `.env`
* Copy the below code, paste it in `.env` file and save it.
* `PERSONAL_USERNAME='youremailid'`
* `PERSONAL_PASSWORD='youremailpassword'`
* Replace with your email, password.

### Test data using Postman
* Open postman, switch to `POST` request and enter url `http://localhost:3050/`
* Select `body` and switch `text` to `json`
* Enter the following code
* `{`
* `"email":"youremailid"`
* `}`
* Execute it, You will receive success message in your CMD as well as 200 status in postman.
