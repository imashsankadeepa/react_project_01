const express = require("express");
const router = express.Router();

//insert Model 
const User = require("../Model/UserModel");

//inser user Controller
const UserController = require("../Controllers/UserControllers");

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);

//exports
module.exports =router;