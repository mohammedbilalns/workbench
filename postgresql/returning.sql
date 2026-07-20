-- returns back the rows immediately after insertion ro updation 

INSERT INTO products (name, category, price, stock)
VALUES ('werssf', 'fsdfsd',323.23, 323)
RETURNING id, name, category, stock, created_at
