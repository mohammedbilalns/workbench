-- IN value must much one item from the list 
-- NOT IN value must not match any time from the list 
-- BETWEEN value must be inside a range 


SELECT name
FROM products
WHERE category IN ('stationery', 'furniture');

SELECT name,price
FROM products
WHERE price BETWEEN 100 and 200
