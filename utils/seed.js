const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought, getRandomUsernameIndex } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add users to the user array
  for (let i = 0; i < 5; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    //const friends = getRandomFriends(5);

    const username = getRandomUsername();
    
    const email = `${username}@gmail.com`;
    
    users.push({
      username,
      email,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);
  
  const thoughts = [];

  for (let i = 0; i<6; i++) {
    const thoughtText = getRandomThought()
    const index = getRandomUsernameIndex()
    const username = users[index].username

    thoughts.push({
      thoughtText,
      username,
    });
    
  }

  await Thought.collection.insertMany(thoughts);

  
  

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);


});
