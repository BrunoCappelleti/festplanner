const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'festplanner_db',
  dialect: 'postgres',
  // username: `sequelize`,
  // password: `password`,
  define: {
    underscored: true,
    }
});

const Festival = sequelize.define('festival',{
  festival_name: Sequelize.STRING,
  festival_date: Sequelize.INTEGER,
  festival_description: Sequelize.TEXT,
  festival_img: Sequelize.STRING
});

//User table for post MVP
//The plan is to change the img type so the user can
//choose whichever pic they want
//instead of having to copy an img url online lol
const User = sequelize.define('user', {
  user_first_name: Sequelize.STRING,
  user_last_name: Sequelize.STRING,
  user_email: Sequelize.STRING,
  // user_img: Sequelize.STRING,
  password_digest: Sequelize.STRING
})

const Task = sequelize.define('task', {
  task_title: Sequelize.STRING,
  task_date: Sequelize.INTEGER,
  task_notes: Sequelize.TEXT,
  task_status:{
    type: Sequelize.STRING,
    defaultValue:'To do'
  }
});

Festival.hasMany(User);
User.belongsTo(Festival);
Task.belongsTo(User);
User.hasMany(Task);

module.exports = {
  sequelize,
  User,
  Festival,
  Task
}
