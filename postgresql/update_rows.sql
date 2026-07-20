
-- update single product 
UPDATE products
SET price = 3323.00
stock = 12
WHERE sku='ELEC-KEY-001';


-- update multiple products 
UPDATE products
SET price = ROUND(price * 1.10 , 2 )
WHERE category = 'stationary'



