// @ts-nocheck
import { PUBLIC_API_URL } from "$env/static/public";

/** @type {import('./$types').PageLoad} */
export async function load() {
  let req = await fetch(`${PUBLIC_API_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
    let data = await req.json();
    if (req.status === 200) {
      return { users: data['users'] };
    }
}
