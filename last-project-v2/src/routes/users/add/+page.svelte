<div class="flex justify-center items-center h-screen bg-gray-200">
    <form method="POST" class="w-1/2 max-w-lg bg-white rounded shadow-md p-5">
        <h2 class="text-2xl font-bold mb-5 text-center">Agregar Usuario</h2>
        <div class="mb-5">
            <label for="name" class="block text-lg font-bold mb-2">Nombre:</label>
            <input type="text" name="name" id="name" required class="w-full px-3 py-2 rounded border border-gray-300 text-lg">
        </div>
        <div class="mb-5">
            <label for="lastname" class="block text-lg font-bold mb-2">Apellido:</label>
            <input type="text" name="lastname" id="lastname" required class="w-full px-3 py-2 rounded border border-gray-300 text-lg">
        </div>
        <div class="mb-5">
            <label for="email" class="block text-lg font-bold mb-2">Email:</label>
            <input type="email" name="email" id="email" required class="w-full px-3 py-2 rounded border border-gray-300 text-lg">
        </div>
        <div class="mb-5">
            <label for="age" class="block text-lg font-bold mb-2">Edad:</label>
            <input type="number" name="age" id="age" required class="w-full px-3 py-2 rounded border border-gray-300 text-lg">
        </div>
        <div class="mb-5">
            <button type="submit" class="w-full bg-blue-500 text-white px-3 py-3 rounded cursor-pointer text-lg transition-colors duration-300 hover:bg-blue-700">Guardar</button>
        </div>
        <div class="mb-5">
            <a href="/users">
                <button type="button" class="w-full bg-blue-500 text-white px-3 py-3 rounded cursor-pointer text-lg transition-colors duration-300 hover:bg-blue-700">Ver Usuarios</button>
            </a>
        </div>
    </form>
</div>