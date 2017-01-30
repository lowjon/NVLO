UPDATE products
SET quantity = $1,
    inv_date = now()
WHERE product_id = $2
