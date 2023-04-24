const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
  removeThought,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(removeUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);
router.route("/:userId/thought/:thoughtId").delete(removeThought);

module.exports = router;
