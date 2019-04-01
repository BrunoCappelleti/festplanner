const { Router } = require('express');
const {  Festival, User } = require('../models');
const { taskRouter } = require('./taskRouter');
const { hash, encode, compare, restrict } = require('../auth')

const userRouter = Router();

const buildAuthResponse = (user) => {
  const { id, user_first_name, user_last_name, user_email } = user
  const token_data = {
    id,
    user_first_name,
    user_last_name,
    user_email,
  };

  const token = encode(token_data);

  return {
    user: token_data,
    token,
  }
}

userRouter.get('/', async (req, res) => {
  try{
    const users = await User.findAll();
    res.json({users})
  }catch(e){
    console.error(e.message);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { user_email, password } = req.body;
    const user = await User.findOne({
      where: {
        user_email,
      },
    });
    if (await compare(password, user.password_digest)) {
      const loginData = buildAuthResponse(user);
      res.json(loginData);
    } else {
      res.status(401).send('Invalid Creds. BE GONE!!')
    }
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message)
  };
});

userRouter.post('/', async (req, res) => {
  try{
    const { user_first_name, user_last_name, user_email, password } = req.body;
    const password_digest = await hash(password);
    const festival = await Festival.findByPk(res.locals.fesId);
    const newUser = await festival.createUser({
      user_first_name,
      user_last_name,
      user_email,
      password_digest
    });
    const loginData = buildAuthResponse(newUser);
    res.json(loginData);
  } catch(e) {
    console.error(e.message);
    res.status(500).send(e.message);
  };
});

userRouter.use('/:id/tasks', (req, res, next) => {
  res.locals.userId = req.params.id
  next();
}, taskRouter)

module.exports = { userRouter }
