create table if not exists public.product (
  id serial primary key,
  location_id int references public.location(id),
  name varchar(200),
  inv_date date,
  quantity int,
  supplier varchar(200)
);
