const { Router } = require('express');
const {  User } = require('../models');
const { hash, encode, compare, restrict } = require('../auth')
const userRouter = Router();

// userRouter.get('/', async (req, res) => {
//   res.json({ users: res.locals.user})
// });


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
    console.log(req.body);
    const user = await User.findOne({
      where: {
        user_email,
      },
    });
    if (user !== null) {
      const userData = {
        ...user.dataValues
      };
      const authenticated = await compare(password, userData.password_digest);
      delete userData.password_digest;
      const token = await encode(userData);
      res.json({
        userData,
        token
      });
    };
  } catch (e) {
    res.status(401).send('Invalid Credentials')
    console.error(e);
  };
});

userRouter.post('/', async (req, res) => {
  try{
  const { user_name, user_email, user_last_name, password } = req.body;
  const password_digest = await hash(password);
  const user = await User.create({
    user_name,
    user_last_name,
    user_email,
    password_digest
  });
    const userData = {
      ...user.dataValues,
    }
  }catch(e){
    console.error(e.message);

}});
module.exports = { userRouter }
