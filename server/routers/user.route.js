const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

router.get("/", userController.index);

router.get("/search", userController.search);

router.post("/create", userController.create);

router.get("/:id", userController.getDetail);

module.exports = router;
