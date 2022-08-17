
const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const Thoughts = [
  'The weather is amazing today',
  'Feeling the birthday Vibes',
  'Babies first steps',
  'Beautiful baby',
  'Look what my crazy cat did!',
  'Puppies are the best',
  'Feeling blessed',
  'cooking up a storm',
  'Must be love',
  'Look at the bride',
  'Warm and cozy by the fire',
]
  


// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const RandomNo = (arr) => Math.floor(Math.random() * arr.length);
// Gets a random Username
const getRandomUsername = () =>`${getRandomArrItem(names)}${RandomNo(names)}`;


const getRandomThought = () => `${getRandomArrItem(Thoughts)}`;
const getRandomUsernameIndex = () => `${RandomNo(Thoughts)}`;


// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThought, getRandomUsernameIndex };
