const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Parse incoming JSON data
app.use(bodyParser.json());

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'student_db'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Handle form submission
app.post('/register', (req, res) => {
  const { fname, lname, age, email, gender, lang } = req.body;
  
  // Insert student data into the database
  const query = 'INSERT INTO students (first_name, last_name, age, email, gender, known_languages) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [fname, lname, age, email, gender, lang], (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      res.json({ success: true, message: 'Registration successful' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

