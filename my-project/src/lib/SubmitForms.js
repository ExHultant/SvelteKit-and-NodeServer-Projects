// submitForm.js
export async function submitForm(node, options) {
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Aquí puedes hacer la petición POST o PUT
        fetch(options.url, {
            method: options.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Haz algo con los datos
        })
        .catch(error => {
            console.error(error);
        });
    }

    node.addEventListener('submit', handleSubmit);

    return {
        destroy() {
            node.removeEventListener('submit', handleSubmit);
        }
    };
}