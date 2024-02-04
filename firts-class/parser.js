export const parse = (request, response) => {
    return new Promise((resolve, reject) => {
        let chunks = []
        request.on('data', (chunk) => {
            chunks.push(chunk);
        })
        request.on('end', () => {
            const data = Buffer.concat(chunks).toString();
            try {
                const json = JSON.parse(data);
                resolve(json);
            }catch(error) {
                reject(error);
            }
        })
    })
}