
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL
);

CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  CHECK (status IN ('draft', 'published')),
  views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0)
);

CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id),
  body TEXT NOT NULL
);

CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL
);

CREATE TABLE post_tags (
  post_id UUID NOT NULL REFERENCES posts(id),
  tag_id UUID NOT NULL REFERENCES tags(id),
  PRIMARY KEY (post_id, tag_id)
);

INSERT INTO users (name)
VALUES
('Mohammed Bilal'),
('John Doe'),
('Alice Johnson'),
('Emma Wilson'),
('David Brown');

INSERT INTO posts (user_id, title, status, views)
VALUES
(
    (SELECT id FROM users WHERE name = 'Mohammed Bilal'),
    'Learning PostgreSQL',
    'published',
    245
),
(
    (SELECT id FROM users WHERE name = 'Mohammed Bilal'),
    'Node.js Streams Explained',
    'draft',
    0
),
(
    (SELECT id FROM users WHERE name = 'John Doe'),
    'Docker Basics',
    'published',
    185
),
(
    (SELECT id FROM users WHERE name = 'Alice Johnson'),
    'Understanding React Hooks',
    'published',
    910
),
(
    (SELECT id FROM users WHERE name = 'Emma Wilson'),
    'TypeScript Tips',
    'draft',
    15
),
(
    (SELECT id FROM users WHERE name = 'David Brown'),
    'Clean Architecture',
    'published',
    530
);

INSERT INTO comments (post_id, body)
VALUES
(
    (SELECT id FROM posts WHERE title = 'Learning PostgreSQL'),
    'Very helpful article.'
),
(
    (SELECT id FROM posts WHERE title = 'Learning PostgreSQL'),
    'Thanks for sharing!'
),
(
    (SELECT id FROM posts WHERE title = 'Docker Basics'),
    'This cleared up many doubts.'
),
(
    (SELECT id FROM posts WHERE title = 'Understanding React Hooks'),
    'Excellent explanation.'
),
(
    (SELECT id FROM posts WHERE title = 'Clean Architecture'),
    'Can you write a part 2?'
);

INSERT INTO tags (name)
VALUES
('PostgreSQL'),
('SQL'),
('Node.js'),
('Docker'),
('React'),
('TypeScript'),
('Architecture'),
('Backend');

INSERT INTO post_tags (post_id, tag_id)
VALUES

-- Learning PostgreSQL
(
    (SELECT id FROM posts WHERE title = 'Learning PostgreSQL'),
    (SELECT id FROM tags WHERE name = 'PostgreSQL')
),
(
    (SELECT id FROM posts WHERE title = 'Learning PostgreSQL'),
    (SELECT id FROM tags WHERE name = 'SQL')
),

-- Node.js Streams Explained
(
    (SELECT id FROM posts WHERE title = 'Node.js Streams Explained'),
    (SELECT id FROM tags WHERE name = 'Node.js')
),
(
    (SELECT id FROM posts WHERE title = 'Node.js Streams Explained'),
    (SELECT id FROM tags WHERE name = 'Backend')
),

-- Docker Basics
(
    (SELECT id FROM posts WHERE title = 'Docker Basics'),
    (SELECT id FROM tags WHERE name = 'Docker')
),

-- React Hooks
(
    (SELECT id FROM posts WHERE title = 'Understanding React Hooks'),
    (SELECT id FROM tags WHERE name = 'React')
),

-- TypeScript Tips
(
    (SELECT id FROM posts WHERE title = 'TypeScript Tips'),
    (SELECT id FROM tags WHERE name = 'TypeScript')
),

-- Clean Architecture
(
    (SELECT id FROM posts WHERE title = 'Clean Architecture'),
    (SELECT id FROM tags WHERE name = 'Architecture')
),
(
    (SELECT id FROM posts WHERE title = 'Clean Architecture'),
    (SELECT id FROM tags WHERE name = 'Backend')
);



