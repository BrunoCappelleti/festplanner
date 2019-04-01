const Sequelize = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
  console.log('called');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgresql',
    loggin: true,
    operatorsAliases: false,
    define: {
      underscored: true,
    },
  });
} else {
  sequelize = new Sequelize({
    database: `p3_music_db`,
    dialect: `postgresql`,
    // username: 'sequelize',
    // password: 'password',
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
};

const Festival = sequelize.define('festival',{
  festival_name: Sequelize.STRING,
  festival_date: Sequelize.STRING,
  festival_simpleDate: Sequelize.STRING,
  festival_location: Sequelize.STRING,
  festival_description: Sequelize.TEXT,
  festival_img: Sequelize.STRING,
  festival_map: Sequelize.TEXT
});

const User = sequelize.define('user', {
  user_first_name: Sequelize.STRING,
  user_last_name: Sequelize.STRING,
  user_email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  festival_id:{
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

const Task = sequelize.define('task', {
  task_title: Sequelize.STRING,
  task_date: Sequelize.DATE,
  task_notes: Sequelize.TEXT,
  task_status:{
    type: Sequelize.STRING,
    defaultValue:'To-do'
  }
});

Festival.hasMany(User);
User.belongsTo(Festival);
User.hasMany(Task);
Task.belongsTo(User, {
  foreignKey: {
    allowNull: false,
  }
});

module.exports = {
  sequelize,
  User,
  Festival,
  Task
}
