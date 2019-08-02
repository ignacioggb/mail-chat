const router = require("express").Router();
const chatController = require("../../controllers/chatController");

// Matches with "/api/books"
router.route("/chats")
  
  .post((req,res,next)=>{
    console.log(req.body);
    chatController.create(req,res,next)});

// Matches with "/api/books/:id"
router
  .route("/:id")

  .put(chatController.update)
  .delete(chatController.remove);

module.exports = router;
