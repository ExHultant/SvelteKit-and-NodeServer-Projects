import { parser } from "./parser.js";

// Array global para almacenar productos
let productos = [
  {
    "id": 1,
    "nombre": "Producto de prueba",
    "precio": 100,
    "cantidad": 10,
    "categoria": "Prueba",
    "peso": "1kg",
    "descripcion": "Este es un producto de prueba"
  },
  {
    "id": 2,
    "nombre": "Producto de prueba 2",
    "precio": 200,
    "cantidad": 30,
    "categoria": "Prueba 3",
    "peso": "1kg",
    "descripcion": "Este es otro producto de prueba"
  },
  {
    "id": 3,
    "nombre": "Producto de prueba 3",
    "precio": 300,
    "cantidad": 20,
    "categoria": "Prueba 2",
    "peso": "2kg",
    "descripcion": "Este es un tercer producto de prueba"
  }
];

export const home = async (request, response) => {
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({ message: "Solicitud GET recibida en /home" })
    );
    response.end();
  }
  if (request.method === "POST") {
    let data = await parser(request);
    console.log(data);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({ message: "Solicitud POST recibida en /home" })
    );
    response.end();
  }
};

export const products = async (request, response) => {
  if (request.method === "GET") {
    // Método GET: Listar todos los productos
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(productos));
    response.end();
  }

  if (request.method === "POST") {
    // Método POST: Añadir un producto
    let nuevoProducto = await parser(request);
    productos.push(nuevoProducto);

    response.writeHead(201, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({
        message: "Producto añadido correctamente",
        producto: nuevoProducto,
      })
    );
    response.end();
  }

  if (request.method === "PATCH") {
    // Método PATCH: Actualizar un producto
    let { id, producto } = await parser(request);

    // Buscar el producto por su ID y actualizarlo
    productos = productos.map((p) => (p.id === id ? producto : p));

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({
        message: "Producto actualizado correctamente",
        producto,
      })
    );
    response.end();
  }

  if (request.method === "DELETE") {
    // Método DELETE: Eliminar un producto
    let { id } = await parser(request);

    // Filtrar el array para excluir el producto con el ID proporcionado
    productos = productos.filter((p) => p.id !== id);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({
        message: "Producto eliminado correctamente",
        deletedProductId: id,
      })
    );
    response.end();
  }
};
