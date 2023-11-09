CREATE TABLE users (
  user_id SERIAL PRIMARY KEY, 
  password VARCHAR(255) NOT NULL, 
  email VARCHAR(255) NOT NULL UNIQUE, 
  first_name VARCHAR(255) NOT NULL, 
  last_name VARCHAR(255) NOT NULL, 
  avatar VARCHAR(255) NOT NULL
);
CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY, 
  user_id INTEGER NOT NULL, 
  title VARCHAR(255) NOT NULL, 
  content TEXT NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY, 
  user_id INTEGER NOT NULL, 
  post_id INTEGER NOT NULL, 
  content TEXT NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, 
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE
);
CREATE TABLE likes (
  like_id SERIAL PRIMARY KEY, 
  post_id INTEGER NOT NULL, 
  user_id INTEGER NOT NULL, 
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE, 
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, 
  UNIQUE (user_id, post_id)
);

INSERT INTO users (password, email, first_name, last_name, avatar)
VALUES
('password1', 'john.doe@example.com', 'John', 'Doe', 'eren_avatar.jpg'),
('password2', 'jane.doe@example.com', 'Jane', 'Doe', 'eren_avatar.jpg'),
('password3', 'will.smith@example.com', 'Will', 'Smith', 'eren_avatar.jpg'),
('password4', 'sarah.connor@example.com', 'Sarah', 'Connor', 'eren_avatar.jpg'),
('password5', 'mary.jane@example.com', 'Mary', 'Jane', 'eren_avatar.jpg'),
('password6', 'tony.stark@example.com', 'Tony', 'Stark', 'eren_avatar.jpg'),
('password7', 'peter.parker@example.com', 'Peter', 'Parker', 'eren_avatar.jpg'),
('password8', 'bruce.wayne@example.com', 'Bruce', 'Wayne', 'eren_avatar.jpg');

INSERT INTO posts (user_id, title, content, created_at)
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
(1, 1, 'First!'),
(1, 2, 'Great post!'),
(2, 2, 'Thanks for sharing'),
(3, 3, 'Very insightful'),
(4, 4, 'I learned a lot'),
(1, 5, 'Love this!'),
(2, 6, 'Nature is wonderful'),
(3, 7, 'Tell us more about your invention'),
(4, 7, 'That sounds amazing'),
(5, 8, 'Photography is an art'),
(6, 9, 'Team Batman all the way'),
(7, 9, 'Superman would definitely win');

INSERT INTO likes (post_id, user_id)
VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(2, 1),
(4, 1),
(5, 2),
(6, 4),
(4, 3),
(7, 5),
(8, 6),
(5, 5),
(6, 7),
(6, 8),
(7, 7);