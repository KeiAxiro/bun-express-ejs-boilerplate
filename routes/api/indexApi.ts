import loginMiddleware from "../../middlewares/auth.middleware";

var express = require("express");
var router = express.Router();

router.use("/login", loginMiddleware);

export default router;
