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

  // create reponse for /create-user

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
    res.write('<li>Pedro Pascal</li>');
    res.write('<li>Lucas Spadafora</li>');
    res.write('</ul>');
    res.write('</main>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = app;