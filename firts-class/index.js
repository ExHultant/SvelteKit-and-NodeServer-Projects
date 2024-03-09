//Primera Clase de SvelteKit con Node JS
//Creando un servidor con Node JS
import http from 'http';
import * as api from './api.js';

export const server = http.createServer((request, response) => {
    api.methods(request, response);    
    response.end();    
});

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});