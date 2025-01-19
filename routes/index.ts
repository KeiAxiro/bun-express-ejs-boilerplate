import loginController from "../controllers/auth.controller";
import homeController from "../controllers/home.controller";

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", homeController);
router.get("/login", loginController);

export default router;
