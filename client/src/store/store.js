import { writable } from 'svelte/store';

export let user = writable({
  id: null,
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	avatar_path: "",
});

export let posts = writable([

  ]);