CREATE TABLE Users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_seller BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Products
(
    product_id SERIAL PRIMARY KEY,
    seller_id INT,
    product_name VARCHAR(100) NOT NULL,
    product_description TEXT,
    product_price NUMERIC(10, 2) NOT NULL,
    product_stock INT NOT NULL,
    FOREIGN KEY (seller_id) REFERENCES Users(user_id)
);

CREATE TABLE Sales
(
    sales_id SERIAL PRIMARY KEY,
    buyer_id INT,
    product_id INT,
    quantity INT NOT NULL,
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (buyer_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

CREATE TABLE Cart
(
    cart_id SERIAL PRIMARY KEY,
    buyer_id INT,
    product_id INT,
    quantity INT NOT NULL,
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (buyer_id) REFERENCES Users(user_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);