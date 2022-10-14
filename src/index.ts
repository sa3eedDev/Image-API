import express from 'express';
import router from './routes/index';

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

export default app;
