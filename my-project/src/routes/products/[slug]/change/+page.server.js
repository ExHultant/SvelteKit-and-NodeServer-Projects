/** @type {import('./$types').+} */
export async function load({params}) {
    return {
        id: params.slug
    }
}