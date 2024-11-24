/* tabla productos*/
CREATE TABLE products (
    asin VARCHAR(20) PRIMARY KEY,
    product_title VARCHAR(255),
    product_price VARCHAR(20),
    product_original_price VARCHAR(20),
    currency VARCHAR(10),
    product_star_rating DECIMAL(3, 2),
    product_num_ratings INT,
    product_url TEXT,
    product_photo TEXT,
    product_num_offers INT,
    product_minimum_offer_price VARCHAR(20),
    is_best_seller BOOLEAN,
    is_amazon_choice BOOLEAN,
    is_prime BOOLEAN,
    climate_pledge_friendly BOOLEAN,
    sales_volume INT,
    delivery TEXT,
    has_variations BOOLEAN
);

/* tabla usuarios */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    names VARCHAR(255),
    surnames VARCHAR(255),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

/* agregar auth_id a la tabla users, para saber a que usuario identificado pertenece la información */
ALTER TABLE users
ADD COLUMN auth_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE SET NULL;



/* política de privacidad */
/* name: INSERT-USER-POLICY */
create policy "INSERT-USER-POLICY"
on "public"."users"
as PERMISSIVE
for INSERT
to authenticated
with check (
true
);

/* name: SELECT-USER-POLICY */
create policy "SELECT-USER-POLICY "
on "public"."users"
as PERMISSIVE
for SELECT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = auth_id)
)


/* name: UPDATE-USER-POLICY */
create policy "UPDATE-USER-POLICY"
on "public"."users"
as PERMISSIVE
for UPDATE
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = auth_id)
)
with check (
    (( SELECT auth.uid() AS uid) = auth_id)
)