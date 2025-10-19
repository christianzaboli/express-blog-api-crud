const posts = require('../data/postsList');

// index
function index(req, res) {
    let filteredPosts = posts;

    if (req.query.tags) { // condizione che si avvera solo nel caso compaia una query 'tags'
        filteredPosts = filteredPosts.filter(post => post.tags.find(tag => tag === req.query.tags))
    }
    res.json(filteredPosts);
}

// show
function show(req, res) {
    res.json(posts.find(post => post.id === parseInt(req.params.id)) ?? // versione ridotta senza check della funzione destroy, se é veritiera restituisce a sinistra, mentre falso a destra grazie al nullish
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
    if (posts.find(post => post.id === parseInt(req.params.id))) {  // controllo se il post richiesto esiste
        posts.splice(posts.indexOf(posts.find(post => post.id === parseInt(req.params.id))), 1) ??  // eliminito tale post nel caso esista
            console.log(posts);
        res.sendStatus(204)
    } else {
        res.status(404), // restituisco un json di not found nel caso opposto
            res.json({ error: 'Not Found', message: 'Post not found' })

    }
}

module.exports = { index, show, post, update, patch, destroy } 