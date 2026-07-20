SELECT name, category, price 
FROM products 
WHERE category = "electronics"
AND price > 100;

-- retrieves product names where the the category is either electronics or furnitures 
SELECT name 
FROM products 
WHERE category = "electronics"
OR category = "furnitures";


-- Not  
SELECT name
FROM products
WHERE NOT category = 'furniture';

-- mixed conditionals
SELECT name
FROM products
WHERE (category = "electronics" OR category = "furniture")
AND stock > 0; 


