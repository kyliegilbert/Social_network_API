
const User = require('../models/User')
const Thought = require('../models/Thought')
// const friendCount = async () =>


module.exports = {
  //Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //Get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
          
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
      )
    .then((user) =>
      !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json({
                user,
                // friends: await friendCount(),
              })
        )
  },


  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId})
      .then((user) =>
      !user
        ? res.status(404).json({ message: 'No such user exists' })
        : Thought.deleteMany({ _id: { $in: user.thoughts } })
          
      ).then(() => res.json({ message: "User and Thought deleted!" }))
      .catch((err) => res.status(500).json(err));

  },
  
  addFriend(req,res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user) 
      )
      .catch((err) => res.status(500).json(err));
  },
  

};