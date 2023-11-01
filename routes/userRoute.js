const express = require("express")
const router = express.Router() ; 

const check = require("../middleware/auth");
const {signupController , loginController} = require("../controllers/UserController");
const {todoController} = require("../controllers/todocontroller");
const {deleteController,deleteAllController} = require("../controllers/deleteTodos");

router.post("/signup" , signupController);
router.post('/login' ,  loginController);
router.post("/create/todos" ,check ,  todoController);
router.delete("/delete/:_id" , deleteController);
router.delete("/delete"  ,  deleteAllController);


module.exports = router; 