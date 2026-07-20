

SELECT p.title AS post_title,
  p.status,
  p.views,
  u.name AS author_name,
  c.body AS comment_body
FROM posts AS p
INNER JOIN users AS U
ON P.user_id = u.id
LEFT JOIN comments AS c
ON P.id = c.post_id
ORDER BY p.views DESC;
