import { writable } from 'svelte/store';

export let user = writable({
	user_id: null,
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	avatar: "",
});

export let posts = writable([
	{
		"id": 0,
		"user_id": 0,
		"post_id": 0,
		"first_name": "",
		"last_name": "",
		"avatar": "",
		"title": "",
		"content": "",
		"timestamp": "",
		"comments": [
			{
				"comment_id": 0,
				"user_id": 0,
				"content": "",
				"created_at": "",
				"first_name": "",
				"last_name": "",
			},
		],
		"like_count": 0,
	}
]);