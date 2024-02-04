import { parse } from "./parser.js";

export const methods = async(request, response) => {
    if (request.method === 'GET') {
        response.writeHead(200);
        response.write('Metodo GET Recibido');
        response.end();
        return;
    } 
    if (request.method === 'POST') {
        response.writeHead(200);
        response.write('Metodo POST Recibido');
        const data = await parse(request);
        console.log(request);
        console.log(data);
        response.end();
        return;
    }
}

export const Home = (request, response) => {
    response.writeHead(200);
    response.write('Hola, Ruta: /')
    response.end();
}
export const Products = (request, response) => {
    response.writeHead(200);
    response.write('Hola, Ruta: /products')
    response.end();
}
export const addProduct = (request, response) => {
    response.writeHead(200);
    response.write('Hola, Ruta: /products/add')
    response.end();
}
export const productAvailable = (request, response) => {
    response.writeHead(200);
    response.write('Hola, Ruta: /products/available')
    response.end();
}
export const Users = (request, response) => {
    response.writeHead(200);
    response.write('Hola, Ruta: /users')
    response.end();
}