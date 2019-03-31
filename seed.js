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
    festival_map: 'https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Grant%20Park%2C%20IL+(Lollapalooza)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
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
