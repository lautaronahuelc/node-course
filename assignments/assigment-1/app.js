const app = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<title>Assignment 1</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<main>');
    res.write('<h1>Welcome to the server!</h1>');
    res.write('<h2>Create a new user</h2>')
    res.write('<form action="/create-user" method="POST">');
    res.write('<input type="text" name="message" placeholder="username">');
    res.write('<button type="submit">Create user</button>');
    res.write('</form>');
    res.write('</main>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // username=whatever-the-user-entered
      console.log(parsedBody.split('=')[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="en">');
    res.write('<head>');
    res.write('<title>Assignment 1</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<main>');
    res.write('<h1>User list</h1>');
    res.write('<ul>');
    res.write('<li>User 1</li>');
    res.write('<li>User 2</li>');
    res.write('</ul>');
    res.write('</main>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 404;
  res.write('<html lang="en">');
  res.write('<head>');
  res.write('<title>404 Not Found</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<main>');
  res.write('<h1>404 Not Found</h1>');
  res.write('</main>');
  res.write('</body>');
  res.write('</html>');
  res.end();
};

module.exports = app;