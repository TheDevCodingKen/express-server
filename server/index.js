// here we're importing your express app
const server = require('./app');

// We're telling the app to listen for network requests on port 3000
const port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log(`Server is listening on localhost: ${port}`);
});
