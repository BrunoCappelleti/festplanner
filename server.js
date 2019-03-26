const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const PORT = process.env.PORT || 5000;
const {festivalRouter} = require('./routes/festivalRouter')
const {taskRouter} = require('./routes/taskRouter')
const {userRouter} = require('./routes/userRouter')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/festivals', festivalRouter);
app.use('/users', userRouter);
app.use('/tasks', taskRouter);

app.listen(5000, () => console.log('Here dude'));
