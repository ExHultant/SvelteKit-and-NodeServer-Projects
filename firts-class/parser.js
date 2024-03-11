export const parser = (request) => {
  return new Promise((resolve, reject) => {
    let chunks = [];
    request.on("data", (chunk) => {
      chunks.push(chunk);
    });
    request.on("end", () => {
      let data = Buffer.concat(chunks).toString();
      try {
        const json = JSON.parse(data);
        resolve(json);
      } catch (error) {
        reject(error);
      }
    });
  });
};
