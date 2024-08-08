const http = require('http');

const server = http.createServer((req, res) => {
    const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;
    res.setHeader("Content-Type", "html");
    res.status = 200;
    res.write(responseBody);
    res.end();
});

server.listen(5005, () => {
    console.log('Server running at http://localhost:5005/');
});
