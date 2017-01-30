INSERT INTO products
(product_name, location, inv_date, quantity, supplier_name)
VALUES ($1 ,$2 ,now() ,$3 ,$4);
