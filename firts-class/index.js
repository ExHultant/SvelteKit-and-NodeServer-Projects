import http from 'http'
import { routers } from './routers.js';

const port = 3000;

const server = http.createServer((request, response) => {
	routers(request, response);
});

server.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});