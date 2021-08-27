// @ Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// @ Custom dependencies
import postsRoute from './routes/posts.js';

const app = express();

dotenv.config({ path: './config/config.env' });
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postsRoute);

const PORT = process.env.PORT || 5000;

// Connecting to mongo db and listening to server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    app.listen(PORT, () =>
      console.log(
        `Mongodb Connected successfully and server is running on port ${PORT}`
      )
    );
  })
  .catch((err) => console.log(err));
