import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(500).send({ success: false, data: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json({ newPost });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send({ message: 'No Such Post!' });

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true,
      }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send({ message: 'No Such Post!' });
  try {
    await PostMessage.findByIdAndDelete(id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Such post');

  try {
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );

    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
};
