
INSERT INTO products (
  name,
  category,
  price, 
  stock,
  sku,
  description
  )
VALUES(
  'laptop stand',
  'electronics',
  '5000.00',
  23,
  'ELEC-KEY-007',
  'laptop stand description'
  );

  SELECT * FROM products WHERE sku='ELEC-KEY-008';
