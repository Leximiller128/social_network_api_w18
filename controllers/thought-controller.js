const { User, Thought } = require("../models");

module.exports = {
    // Get all Thoughts
    getAllThoughts(req, res) {
      Thought.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
      // Get a Thought
  getThought(req, res) {
    Thought.findOne({ _id: req.params.userid })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a thought
//   updateThought(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.userid },
//       req.body,
//       {
//         returnOriginal: false,
//       },
//       (err, result) => {
//         if (result) {
//           res.status(200).json(result);
//           console.log("Updated");
//         } else {
//           console.log("Was not able to update");
//           res.status(500).json({ message: "unable to update" });
//         }
//       }
//     ),
// .then((user) =>
// !user
//   ? res.status(404).json({ message: "No user with this id!" })
//   : res.json(user)
// )
// .catch((err) => res.status(500).json(err));
// },
// };