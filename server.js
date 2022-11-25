const express = require('express');
const app = express();
const port = 4000;
const userRouter = require('./router/users');
const connectDB = require('./config/db');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //for parsing application/x-www-form-urlencoded
app.use(userRouter);
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});