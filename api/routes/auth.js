import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, this is auth Endpoint');
});

router.get('/register', (req, res) => {
  res.send('Hello, this is register Endpoint');
});

export default router;
