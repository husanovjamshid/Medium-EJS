
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE IF NOT EXISTS users(
    user_id VARCHAR(100) PRIMARY KEY,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    password VARCHAR(60),
    email VARCHAR(64) NOT NULL,
    avatar VARCHAR(200)
);

DROP TABLE IF EXISTS posts CASCADE;
CREATE TABLE IF NOT EXISTS posts(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    body TEXT,
    image VARCHAR(200),
    user_id VARCHAR(100) REFERENCES users (user_id),
    created_at timestamp DEFAULT  current_timestamp
);


INSERT INTO users(user_id, first_name,last_name, password, email, image) VALUES (12154545, 'jamshid','husanov','pdsadad', 'jamshid@gmail.com', 'dsad.jpg')

INSERT INTO posts(title, body, image, user_id) VALUES ('Najot talim','konferensiya tayyorgarlik', 'image-1686501201901-605700091.svg', 106354715421444071583)