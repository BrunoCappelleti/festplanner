const { Router } = require('express');
const {  User } = require('../models');

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

// userRouter.post('/', async (req, res) => {
//   try{
//   const { user_name, user_email, password_digest } = req.body;
//   const user = await User.create({
//     user_name,
//     user_email,
//     password_digest
//   });
//     const userData = {
//       ...user.dataValues,
//     }
//   }catch(e){
//     console.error(e.message);
//
// }});
module.exports = { userRouter }
