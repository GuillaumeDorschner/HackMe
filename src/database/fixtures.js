require("dotenv").config();
const { connectDatabase } = require("./connectionconfigDb");

const seedDatabase = async () => {
  const client = await connectDatabase();

  const insertUsers = `
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
`;
  await client.query(insertUsers);

  const insertPosts = `
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
`;
  await client.query(insertPosts);

  const insertComments = `
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
`;
  await client.query(insertComments);

  const insertLikes = `
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
`;
  await client.query(insertLikes);

  console.log("Random data done ✅");

  await client.end();
};

seedDatabase().catch((err) => console.error("Error seeding database:", err));
