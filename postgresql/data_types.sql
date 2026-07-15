DROP TABLE IF EXISTS basics.products_basic;

CREATE TABLE basics.products_basic (

  id SERIAL PRIMARY KEY,
  -- string with max length 100 chars 
  name VARCHAR(100) NOT NULL,
  description TEXT,
  stock INTEGER DEFAULT 0,
  -- largeer whole number than INTEGER
  total_views BIGINT DEFAULT 0,
  -- exact decimal values 
  -- 10 total digits 
  -- 2 digits after decimal 
  price NUMERIC(10,2),
  is_active BOOLEAN DEFAULT true
);

INSERT INTO basics.products_basic
  (name, description, stock, total_views, price, is_active)
VALUES 
  (
  'Product 1',
  'description s.fsdf',
  100,
  1200,
  2455.54,
  true
  );

SELECT * FROM basics.products_basic;

SELECT id, name , price, is_active FROM basics.products_basic WHERE is_active;

