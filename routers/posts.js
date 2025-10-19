// import di express e proprietá di routing
const express = require('express');
const router = express.Router();

const posts = require('../data/postsList')

// index
router.get('/', function (req, res) {
  let filteredPosts = posts;

  if (req.query.tags) {
    filteredPosts = filteredPosts.filter(post => post.tags.find(tag => tag === req.query.tags))
  }
  res.json(filteredPosts);
})

// show
router.get('/:id', function (req, res) {
  res.json(posts.find(post => post.id === parseInt(req.params.id)) ??
    (res.status(404), res.json({ error: 'Not Found', message: 'Post not found' })));
})

// post
router.post('/', function (req, res) {
  res.send('Create new post')
})

// update
router.put('/:id', function (req, res) {
  res.send('Overhaul mod of the post n.' + req.params.id)
})

// patch
router.patch('/:id', function (req, res) {
  res.send('Partial mod of the post n.' + req.params.id)
})

// delete
router.delete('/:id', function (req, res) {
  posts.splice(posts.indexOf(posts.find(post => post.id === parseInt(req.params.id))), 1);
  console.log(posts);
  res.sendStatus(204)
})

module.exports = router;