-- calculates results form from many rows 
-- COUNT() - number of rows 
-- SUM() -- total value 
-- AVG() - Average vaue 
-- MIN(), MAX() - MInimum value MAXIMUM VALUE 


SELECT 
  COUNT(*) AS total_posts,
  COUNT(*) FILTER (WHERE status = 'published') AS published_posts,
  SUM(views) AS total_views
FROM posts;
