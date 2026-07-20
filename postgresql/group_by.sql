-- for creating groups of rows 
-- WHERE -> filters normal rows before grouping
-- HAVING -> filters after grouping 

-- find the authors who have written atleast 2 posts 

SELECT users.name AS author_name,
  COUNT(posts.id) AS total_posts,
  SUM(posts.views) AS total_views
FROM users
LEFT JOIN posts
WHERE users.id = posts.user_id
GROUP BY users.id, users.name
HAVING COUNT(p.id) >= 2
ORDER BY total_posts DESC; 
