import { writable } from 'svelte/store';

export let user = writable({
  id: 1,
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	avatar_path: "",
});

export let posts = writable([
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post! <script>alert('Hello, World!'); console.log('hey');</script> This is my first",
      timestamp: "2023-01-01T12:00:00",
      likes: 20,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "This is my first post!",
        },
      ],
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
      timestamp: "2023-01-02T12:00:00",
      likes: 35,
      comments: [
        {
          commenter: "John Doe",
          comment: "Hello to you too!",
        },
      ],
    },
    {
      id: 3,
      author: "Emily Davis",
      content: "Learning Svelte is fun!",
      timestamp: "2023-01-03T12:00:00",
      likes: 10,
      comments: [
        {
          commenter: "John Doe",
          comment: "I agree!",
        },
      ],
    },
    {
      id: 4,
      author: "Mark Green",
      content: "Happy New Year, everyone!",
      timestamp: "2023-01-01T00:00:00",
      likes: 50,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "Happy New Year!",
        },
        {
          commenter: "Emily Davis",
          comment: "Wishing everyone a great year ahead!",
        },
      ],
    },
    {
      id: 5,
      author: "Sophia Lee",
      content: "Just got a new puppy!",
      timestamp: "2023-01-05T09:00:00",
      likes: 120,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "So cute!",
        },
      ],
    },
    {
      id: 6,
      author: "Daniel Smith",
      content: "Anyone else love hiking?",
      timestamp: "2023-01-06T11:00:00",
      likes: 15,
      comments: [
        {
          commenter: "Emily Davis",
          comment: "Absolutely!",
        },
      ],
    },
  ]);