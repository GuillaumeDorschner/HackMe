import { writable } from 'svelte/store';

export let user = writable({
	id: 0,
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	avatar_path: "",
});

export let posts = writable([
	{
		"id": 0,
		"firstname": "",
		"lastname": "",
		"user_id": 0,
		"avatar_path": "",
		"content": "",
		"title": "",
		"timestamp": "",
		"comments": [],
		"likes": 0,
	}
]);