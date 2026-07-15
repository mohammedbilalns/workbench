-- db contains schema which contains the table
CREATE SCHEMA IF NOT EXISTS basics; 

CREATE EXTENSION IF NOT EXISTS pgcrypto; 

-- 
SELECT schema_name
FROM information_schema.schemata
ORDER BY schema_name

