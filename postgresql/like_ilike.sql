-- like case sensitive pattern match 
-- iilike - case insensitive pattern match 
-- % means any no of chars 
-- exactly one chars 

-- products starting with Wireless 
SELECT name, price 
FROM products
WHERE name LIKE 'Wireless%';


-- matching multiple columns 
SELECT name, category, description
FROM products
WHERE name ILIKE '%chair%'
OR description ILIKE '%cha%'
