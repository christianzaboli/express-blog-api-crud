const posts = require('../data/postsList');

// index
function index(req, res) {
    let filteredPosts = posts;

    if (req.query.tags) {
        filteredPosts = filteredPosts.filter(post => post.tags.find(tag => tag === req.query.tags))
    }
    res.json(filteredPosts);
}

// show
function show(req, res) {
    res.json(posts.find(post => post.id === parseInt(req.params.id)) ??
        (res.status(404), res.json({ error: 'Not Found', message: 'Post not found' })));
}

// post
function post(req, res) {
    res.send('Create new post')
}

// update
function update(req, res) {
    res.send('Overhaul mod of the post n.' + req.params.id)
}

// patch
function patch(req, res) {
    res.send('Partial mod of the post n.' + req.params.id)
}

// delete
function destroy(req, res) {
    posts.splice(posts.indexOf(posts.find(post => post.id === parseInt(req.params.id))), 1);
    console.log(posts);
    res.sendStatus(204)
}

module.exports = { index, show, post, update, patch, destroy } 