-- null should be checked with IS NULL or IS NOT NULL instaed of = 

SELECT name
FROM products 
WHERE description IS NOT NULL; 
