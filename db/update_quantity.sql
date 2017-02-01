UPDATE product
SET quantity = $1,
    inv_date = now()
WHERE id = $2
