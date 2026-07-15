DROP TABLE IF EXISTS basics.students;

CREATE TABLE basics.students (
  -- create an auto incrementing integer
  id SERIAL PRIMARY KEY,
  -- string data and the columns is required
  name TEXT NOT NULL,
  -- the mail should be unique in the table 
  email TEXT NOT NULL UNIQUE, 
  -- column with a check 
  age INTEGER CHECK (age >= 18),
  -- auto generated time stamp if not provided 
  created_at TIMESTAMP DEFAULT NOW()
);


--insert data 
INSERT INTO basics.students (name, email, age) VALUES
('Bilal', 'bilalnsmuhammed@gmail.com',25),
('John', 'john@gmail.com',32);
