export const Methods = (request, response) => {
    if (request.method === 'GET') {
        response.writeHead(200);
        response.write('Metodo GET Recibido');
        response.end();
        return;
    }
    if (request.method === 'POST') {
        response.writeHead(200);
        response.write('Metodo POST Recibido');
        response.end();
        return;
    }
}