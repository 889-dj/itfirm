const { Client } = require('pg');

// Connection details based on Docker Compose
// const connectionString = 'postgresql://devjain:devjain@localhost:5432/djDB';

// dbConnect function


const dbConnect = async () => {
    const client = new Client({
        host: 'db',
        user: 'devjain',
        password: 'devjain',
        database: 'djDB',
        port: 5432
      });
      

  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
    return client;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return null;
  }
};

module.exports = dbConnect;
