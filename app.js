import express from 'express';
import postsRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(express.json());

app.use('/posts', postsRoutes);
app.use('/user', userRoutes);

export default app;
