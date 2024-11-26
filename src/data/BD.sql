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

/* ************************************** */
/* tabla usuarios */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    auth_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    names VARCHAR(255),
    surnames VARCHAR(255),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);



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



/* ************************************** */

CREATE TABLE FavoriteProduct (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Genera automáticamente un UUID único
  product_id VARCHAR(20) NOT NULL REFERENCES products(asin) ON DELETE CASCADE,
  cant INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);


/* name: INSERT-FAVORITE-PRODUCT-POLICY */
create policy "INSERT-FAVORITE-PRODUCT-POLICY"
on "public"."FavoriteProduct"
as PERMISSIVE
for INSERT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)


/* name: SELECT-FAVORITE-PRODUCT-POLICY */
create policy "SELECT-FAVORITE-PRODUCT-POLICY"
on "public"."FavoriteProduct"
as PERMISSIVE
for SELECT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)

/* name: DELETE-FAVORITE-PRODUCT-POLICY */
create policy "DELETE-FAVORITE-PRODUCT-POLICY"
on "public"."FavoriteProduct"
as PERMISSIVE
for DELETE
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = auth_id)
)

/* ********************************/
CREATE TABLE Cart (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Genera automáticamente un UUID único
  product_id varchar(20) NOT NULL REFERENCES products(asin) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0), 
  added_at TIMESTAMPTZ DEFAULT NOW()
);

/* name: INSERT-CART-POLICY */
create policy "INSERT-CART-POLICY"
on "public"."Cart"
as PERMISSIVE
for INSERT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)


/* name: SELECT-CART-POLICY */
create policy "SELECT-CART-POLICY"
on "public"."Cart"
as PERMISSIVE
for SELECT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)

/* name: DELETE-CART-POLICY */
create policy "DELETE-CART-POLICY"
on "public"."Cart"
as PERMISSIVE
for DELETE
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)

/* name: UPDATE-CART-POLICY */
create policy "UPDATE-CART-POLICY"
on "public"."Cart"
as PERMISSIVE
for UPDATE
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)
with check (
    (( SELECT auth.uid() AS uid) = user_id)
)



/* ******************************** */
CREATE TABLE Orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Genera automáticamente un UUID único
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  order_date TIMESTAMPTZ DEFAULT NOW(),
  total_amount DECIMAL(10, 2) NOT NULL CHECK (total_amount >= 0),
  status VARCHAR(20) DEFAULT 'completed' -- Ejemplo: pending, completed, cancelled
);

/* name: INSERT-ORDER-POLICY */
create policy "INSERT-ORDER-POLICY"
on "public"."Orders"
as PERMISSIVE
for INSERT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)


/* name: SELECT-ORDER-POLICY */
create policy "SELECT-ORDER-POLICY"
on "public"."Orders"
as PERMISSIVE
for SELECT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
) 


/* name: DELETE-ORDER-POLICY */
create policy "DELETE-ORDER-POLICY"
on "public"."Orders"
as PERMISSIVE
for DELETE
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
) 



/* ******************************** */

CREATE TABLE OrderDetails (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Genera automáticamente un UUID único
  order_id uuid NOT NULL REFERENCES Orders(id) ON DELETE CASCADE,
  product_id varchar(20) NOT NULL REFERENCES products(asin) ON DELETE CASCADE,
  quantity INT NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(10, 2) NOT NULL CHECK (unit_price >= 0),
  total_price DECIMAL(10, 2) GENERATED ALWAYS AS (quantity * unit_price) STORED
);

/* name: INSERT-ORDER-DETAIL-POLICY */
create policy "INSERT-ORDER-DETAIL-POLICY"
on "public"."OrderDetails"
as PERMISSIVE
for INSERT
to authenticated
using  (
    (( SELECT auth.uid() AS uid) = user_id)
)   
