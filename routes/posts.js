const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


//Get back all the post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({
      message: err
    })
  }
});

//Subtmits a post
router.post('/', async (req, res) => {
  const post = new Post({
    category: req.body.category,
    question: req.body.question,
    correct_answer: req.body.correct_answer,
    incorrect_answers: req.body.incorrect_answers,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({
      message: err
    })
  }
});

//Specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({
      message: err
    })
  }
});

//Delete post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({
      _id: req.params.postId
    });
    res.json(removedPost);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

//Update a post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId }, 
      { $set: {
        category: req.body.category,
        question: req.body.question,
        correct_answer: req.body.correct_answer,
        incorrect_answers: req.body.incorrect_answers,
      }});
      res.json(updatedPost);
  } catch (err) {
    res.json({
      message: err
    });
  }
})


module.exports = router;