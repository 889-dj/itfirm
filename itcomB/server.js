const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const json2xls = require('json2xls');
const fs = require('fs');
const dbConnect = require('./db/dbConnect');  // Import dbConnect function

const app = express();

// Middleware to handle JSON requests
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(json2xls.middleware); // For converting JSON to Excel

// In-memory storage for form submissions (as a replacement for database)
let formSubmissions = [];

// Route to handle form submissions
// Route to handle form submissions and store data in the database
// Route to handle form submissions and store data in the 'customer' table in the database
app.post('/api/submit', async (req, res) => {
  console.log("Received request body:", req.body);  // Log the incoming request body for debugging

  const { username, email, message, service, services, phone } = req.body;

  // Use `service` if provided, otherwise fall back to `services`
  const selectedService = service || services;
  
  // Check that all fields are provided
  if (!username || !email || !message || !selectedService || !phone) {
      console.error("All form fields are required, missing:", { username, email, message, selectedService, phone });
      return res.status(400).send("All fields are required");
  }

  try {
      // Connect to the database
      const client = await dbConnect();
      if (!client) {
          console.error('Database connection failed');
          return res.status(500).send('Database connection failed');
      }

      // Store form submission in the 'customer' table
      const query = 'INSERT INTO customer (username, email, message, service, phone) VALUES ($1, $2, $3, $4, $5)';
      await client.query(query, [username, email, message, selectedService, phone]);
      console.log('Form submission saved to database:', { username, email, service, phone, message });

      // Send email notification
      const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'garry.heathcote16@ethereal.email',
              pass: 'mRKnm6ygtnGuh8mY3K',
          },
      });

      const mailOptions = {
          from: 'your-email@gmail.com',
          to: 'your-email@gmail.com',  // Your email to receive notifications
          subject: 'New Contact Form Submission',
          text: `You have a new message from ${username}. \nService: ${service} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      // Respond with success message
      res.status(200).send('Form submitted and data saved successfully!');
      
      // Close the database connection
      await client.end();
  } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).send('Error submitting form');
  }
});



// Route to export data to Excel (using in-memory formSubmissions array)
app.get('/api/export', (req, res) => {
  if (formSubmissions.length === 0) {
    return res.status(404).send('No data available to export.');
  }

  const xls = json2xls(formSubmissions);
  const filePath = 'contacts.xlsx';

  // Save to file
  fs.writeFileSync(filePath, xls, 'binary');

  // Send file to the client for download
  res.download(filePath, (err) => {
    if (err) {
      console.error('Error downloading the file:', err);
      res.status(500).send('Error exporting data');
    }

    // Optionally, clear in-memory submissions after download
    // formSubmissions = [];
  });
});

// Endpoint to handle email subscription and save to database
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'Email is required' });
  }

  // Log the received email
  console.log(`Received email: ${email}`);

  try {
    // Connect to the database
    const client = await dbConnect();
    if (!client) {
      return res.status(500).send('Database connection failed');
    }

    // Save the email into the 'subscribers' table
    const query = 'INSERT INTO subscribers (email) VALUES ($1)';
    await client.query(query, [email]);

    // Respond with a success message
    res.status(200).send({ message: 'Email received and saved to database!' });

    // Close the database connection
    await client.end();
  } catch (error) {
    console.error('Error saving email to database:', error);
    res.status(500).send('Error saving email to database');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
