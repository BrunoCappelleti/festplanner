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

userRouter.post('/', async (req, res) => {
  try{
  const { user_name, user_email, password } = req.body;
  const password_digest = await hash(password);
  const user = await User.create({
    user_name,
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
