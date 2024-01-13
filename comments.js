// create web server using express
const express = require('express');
const app = express();
// create server to listen on port 3000
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// create route handler
app.get('/', (req, res) => {
    res.send('Hello World');
    
});
// create route handler for comments
app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});
// create route handler for posts
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});
// create route handler for query parameters
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
// create route handler for a single post
app.get('/api/posts/:id', (req, res) => {
    res.send(req.params.id);
});
//# sourceMappingURL=comments.js.map