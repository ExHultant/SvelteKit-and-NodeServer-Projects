export const load = async ({ fetch }) => {
    const productRes = await fetch("https://dummyjson.com/products");
    const productData = await productRes.json();
    const products = productData.products; 

    return {
        products: products,
    };
};