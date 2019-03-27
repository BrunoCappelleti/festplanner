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
    festival_name: 'lollapalooza',
    festival_date: 01042019,
    festival_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur feugiat neque nec porttitor. Phasellus consectetur aliquet mi. Praesent sit amet porttitor turpis. Mauris lacinia mollis consequat. Donec ac fermentum metus, eu commodo nisi. Nullam cursus quam ut euismod euismod. Vestibulum rutrum accumsan ligula, id sagittis velit sollicitudin non. Donec fringilla, libero sit amet vestibulum commodo, augue nunc dapibus libero, sodales euismod augue urna     vestibulum velit. Vivamus eu purus a nunc pharetra porta quis sed turpis. Nullam vulputate id quam quis elementum. Aliquam suscipit egestas suscipit. Ut sollicitudin sed sapien in convallis. Nam cursus lobortis aliquam. Curabitur libero lacus, porttitor id dignissim a, facilisis a quam. Cras id eros et nulla gravida rhoncus vitae a dolor. Fusce volutpat elit nibh, mattis viverra magna vestibulum bibendum.',
    festival_img: 'https://dancingastronaut.com/wp-content/uploads/2017/07/lollapalooza-red-bull-tv.jpg'
  });

  const bruno = await User.create({
    user_first_name: 'Bruno',
    user_last_name: 'blah',
    user_email: 'bruno@gmail.com',
    password_digest: 'this is a password for now'
  });
  await bruno.setFestival(lollapalooza);

  const shirin = await User.create({
    user_first_name: 'shirin',
    user_last_name: 'bleep',
    user_email: 'shirin@gmail.com',
    password_digest: 'this is another password for now'
  });
  await shirin.setFestival(lollapalooza);

  const buyTicket = await Task.create({
    task_title: 'Buy tickets',
    task_notes: 'Must buy tickets by tomorrow',
    task_date: 01022019
  });
  await buyTicket.setUser(bruno);

  const bookHotel = await Task.create({
    task_title: 'Book hotel',
    task_notes: 'Must book hotel before festival date',
    task_date: 01023019
  })
  await bookHotel.setUser(bruno);

  process.exit();
};

seed();
