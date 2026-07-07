# Merch Store 

# As a creator 
create 
updaate 
delete 
read 
read all products 

# As sa customer 
read all 
read idv 
place 
view history 

# Product 
name 
description
price
stock 
category

# Order 
Customer name 
customer emeail 
procuts 
status 

# ERD 

products {
id string pk 
name string 
description strin g
price deciaml 
stock int 

created at timestamp 
updated at timestamp 
}

ordes {
id strinng pk 
customer_name string 
customer_email string 
status string 
total amount 

created at timestamp
}

OrderItems {
id string pk 
price_at_purchase decimal
quantity int

order_id string 
product_id string
}

order_items.order_id > order.id 
order_items.product_id > products.id


# Api 

## Product 
- create - POST /products 
- update - PUT /products/{id}
- read - GET /products/{id}
- read all - GET /products
- delete - DELETE /products/{id}

## Order
- Place - POST /orders
- Read - GET /orders/{id}
- Get all - GET /orders
