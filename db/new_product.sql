INSERT INTO product
(name, location_id, inv_date, supplier)
VALUES ($1 ,$2 ,now() ,$3);
