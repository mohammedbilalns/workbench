
-- null - unknown missing value
-- empty string - known string val but it contains no characters 
-- zero - actual numeric value of 0 

DROP TABLE IF EXISTS basics.value_examples;

CREATE TABLE basics.value_examples (
  id SERIAL PRIMARY KEY,
  nickname TEXT,
  bio TEXT,
  score INTEGER
);

INSERT INTO  basics.value_examples (nickname, bio, score)
VALUES 
(null , 'learning postgresql', 10),
('', 'empty nick name', 20),
('fsdf', '', 0),
('gf', null, null);


--SELECT * FROM basics.value_examples;

SELECT * FROM basics.value_examples WHERE nickname IS NOT NULL;
SELECT * FROM basics.value_examples WHERE nickname='';
