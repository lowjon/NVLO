INSERT INTO products
(product_name, location, inv_date, supplier_name)
VALUES ($1 ,$2 ,now() ,$3);
