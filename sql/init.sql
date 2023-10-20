-- Création de la base de données
CREATE DATABASE hackme;

-- Utilisation de la nouvelle base de données
\c hackme

-- Création de la table des utilisateurs
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    avatar_path VARCHAR(255) NOT NULL
);

-- Création de la table des posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table des commentaires
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table des likes
CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    post_id INTEGER REFERENCES posts(id),
    comment_id INTEGER REFERENCES comments(id),
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT current_timestamp,
    UNIQUE(user_id, post_id, comment_id)
);


-- Insertion de données de test
INSERT INTO users (password, email, firstname, lastname, avatar_path)
VALUES
('password1', 'john.doe@example.com', 'John', 'Doe', 'https://thispersondoesnotexist.com/'),
('password2', 'jane.doe@example.com', 'Jane', 'Doe', 'https://thispersondoesnotexist.com/'),
('password3', 'will.smith@example.com', 'Will', 'Smith', 'https://thispersondoesnotexist.com/'),
('password4', 'sarah.connor@example.com', 'Sarah', 'Connor', 'https://thispersondoesnotexist.com/'),
('password5', 'mary.jane@example.com', 'Mary', 'Jane', 'https://thispersondoesnotexist.com/'),
('password6', 'tony.stark@example.com', 'Tony', 'Stark', 'https://thispersondoesnotexist.com/'),
('password7', 'peter.parker@example.com', 'Peter', 'Parker', 'https://thispersondoesnotexist.com/'),
('password8', 'bruce.wayne@example.com', 'Bruce', 'Wayne', 'https://thispersondoesnotexist.com/');

INSERT INTO posts (user_id, title, content, DATE)
VALUES
(1, 'My First Post', 'This is my first post content', '2023-10-01 08:00:00'),
(1, 'My Second Post', 'This is my second post content', '2023-10-02 09:00:00'),
(2, 'Jane''s Thoughts', 'Random musings', '2023-10-03 10:00:00'),
(3, 'Tech Tips', 'Some useful tech tips', '2023-10-04 11:00:00'),
(4, 'Nature Love', 'Why we should love nature', '2023-10-05 12:00:00'),
(5, 'The Importance of Sleep', 'Sleep is crucial for health', '2023-10-06 13:00:00'),
(6, 'My New Invention', 'I just invented something cool', '2023-10-07 14:00:00'),
(7, 'My Photography Journey', 'How I got into photography', '2023-10-08 15:00:00'),
(8, 'Batman vs Superman', 'Who would win?', '2023-10-09 16:00:00');

INSERT INTO comments (user_id, post_id, content)
VALUES
(1, 1, 'Great post!'),
(2, 1, 'Thanks for sharing'),
(3, 2, 'Very insightful'),
(4, 3, 'I learned a lot'),
(1, 4, 'Love this!'),
(2, 5, 'Nature is wonderful'),
(3, 6, 'Tell us more about your invention'),
(4, 6, 'That sounds amazing'),
(5, 7, 'Photography is an art'),
(6, 8, 'Team Batman all the way'),
(7, 8, 'Superman would definitely win');

INSERT INTO likes (PostID, CommentID, UserID)
VALUES
(1, NULL, 1),
(NULL, 1, 2),
(2, NULL, 3),
(3, NULL, 4),
(NULL, 2, 1),
(NULL, 3, 2),
(4, NULL, 1),
(5, NULL, 2),
(6, NULL, 4),
(NULL, 4, 3),
(7, NULL, 5),
(8, NULL, 6),
(NULL, 5, 5),
(NULL, 6, 7),
(6, NULL, 8),
(7, NULL, 7);