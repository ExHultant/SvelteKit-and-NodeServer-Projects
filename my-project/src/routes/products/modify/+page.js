export const load = async ({ fetch, productId }) => {
	const productRes = await fetch(`https://dummyjson.com/products/${productId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({})
	});
	const productData = await productRes.json();

	return productData;
};
