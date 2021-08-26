import PostMessage from '../models/postMessage.js';

export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find({});
    res.status(200).send({ postMessages });
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
