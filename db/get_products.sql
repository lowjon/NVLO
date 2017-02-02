SELECT * FROM product
where location_id = $1
order by product.id asc;
