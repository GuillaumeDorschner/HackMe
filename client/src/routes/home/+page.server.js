import { redirect } from '@sveltejs/kit';

export async function load({cookies}) {
    const user = cookies.get("user");

    if (!user) {
        throw redirect(307, '/login');
    }
}
