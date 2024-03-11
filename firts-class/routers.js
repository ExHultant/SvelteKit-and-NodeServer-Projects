import url from "url";
import { routes } from "./routes.js";

export const routers = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const handler = routes[trimmedPath];

  // Configura los headers CORS para todas las respuestas
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (handler) {
    handler(request, response);
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
};
