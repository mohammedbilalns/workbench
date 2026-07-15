
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL CHECK (price >=0),
  stock INTEGER NOT NULL DEFAULT 0  CHECK (stock >= 0 ),
  is_active BOOLEAN NOT NULL DEFAULT true,
  sku TEXT UNIQUE,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products (name, category, price, stock, is_active, sku, description)
VALUES
(
    'Wireless Mouse',
    'Electronics',
    799.00,
    150,
    true,
    'ELEC-001',
    'Ergonomic wireless mouse with USB receiver.'
),
(
    'Mechanical Keyboard',
    'Electronics',
    3499.00,
    75,
    true,
    'ELEC-002',
    'RGB mechanical keyboard with blue switches.'
),
(
    'Bluetooth Speaker',
    'Electronics',
    2499.00,
    60,
    true,
    'ELEC-003',
    'Portable Bluetooth speaker with deep bass.'
),
(
    'Gaming Headset',
    'Accessories',
    1999.00,
    45,
    true,
    'ACC-001',
    'Over-ear gaming headset with noise-cancelling microphone.'
),
(
    'USB-C Charger',
    'Accessories',
    899.00,
    200,
    true,
    'ACC-002',
    '30W fast charging USB-C wall adapter.'
),
(
    'Laptop Stand',
    'Office',
    1499.00,
    80,
    true,
    'OFF-001',
    'Adjustable aluminum laptop stand.'
),
(
    'Notebook A5',
    'Stationery',
    199.00,
    300,
    true,
    'STA-001',
    'Hardcover ruled notebook with 200 pages.'
),
(
    'Water Bottle',
    'Home',
    499.00,
    120,
    true,
    'HOME-001',
    '750ml stainless steel insulated water bottle.'
),
(
    'LED Desk Lamp',
    'Home',
    1299.00,
    50,
    false,
    'HOME-002',
    'Rechargeable LED desk lamp with adjustable brightness.'
),
(
    'Running Shoes',
    'Footwear',
    3999.00,
    35,
    true,
    'FTW-001',
    'Lightweight running shoes designed for everyday training.'
);


