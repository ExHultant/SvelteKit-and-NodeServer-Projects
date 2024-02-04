import url from 'url'
import routes from 'routes.js'
export const routers = (request, response) => {
    const urlParser = url.parse(request.url, true);
    const path = urlParser.pathname;
    const pathFilter = path.replace(/^\/+|\/+$/g,'');
    let handler = routes[pathFilter];
    if (handler) {
        handler(request,response);
    } else {
        response.writeHead(404, {"Content-Type":"aplication/json"});
        response.end();
    }
}