const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  // updateThought,
  // deleteThought,
  // addReaction,
  // deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

// router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction);

module.exports = router;
