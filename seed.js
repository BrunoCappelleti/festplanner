const {
  Festival,
  User,
  Task
} = require('./models');

async function seed() {
  await Festival.destroy({ where: {}});
  await User.destroy({where: {}});
  await Task.destroy({where: {}});

  const lollapalooza = await Festival.create({
    festival_name: 'Lollapalooza',
    festival_date: 'Aug 1, 2019 20:30:00',
    festival_simpleDate: 'Aug 1 - 4',
    festival_location: 'CHICAGO',
    festival_description: 'Lollapalooza is an annual 4-day music festival based in Chicago, Illinois at Grant Park. Performances include but are not limited to alternative rock, heavy metal, punk rock, hip hop, and electronic music.',
    festival_img: 'https://dancingastronaut.com/wp-content/uploads/2017/07/lollapalooza-red-bull-tv.jpg',
    festival_map: 'https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Grant%20Park%2C%20IL+(Lollapalooza)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed',
  });

  const bruno = await lollapalooza.createUser({
    user_first_name: 'Bruno',
    user_last_name: 'blah',
    user_email: 'bruno@gmail.com',
    password_digest: 'this is a password for now'
  });

  await lollapalooza.createUser({
    user_first_name: 'shirin',
    user_last_name: 'bleep',
    user_email: 'shirin@gmail.com',
    password_digest: 'this is another password for now'
  });

  await bruno.createTask({ task_title: 'Buy Tickets', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Get sunglasses', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Buy sunscreen', task_status: "In Progress", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Get a super cool hat', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Tell my friends I am going', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Get new memory stick for camera', task_status: "In Progress", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Aquire body-glitter', task_status: "Done", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Pack water', task_status: "Done", task_date: new Date(), task_notes: 'yessssss'});
  await bruno.createTask({ task_title: 'Dont forget tooth brush', task_status: "Done", task_date: new Date(), task_notes: 'heyheyhey'});
  await bruno.createTask({ task_title: 'Last Task!', task_status: "To-Do", task_date: new Date(), task_notes: 'heyheyhey'});

  process.exit();
};

seed();
