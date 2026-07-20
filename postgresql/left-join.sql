-- keeps all rows from the left table 
-- if the right table has matchin data it includs if not it retuens null 


SELECT posts.title AS post_title,
  comments.body AS comment_body
FROM posts
LEFT JOIN comments
ON posts.id = comments.post_id
ORDER BY posts.title; 
