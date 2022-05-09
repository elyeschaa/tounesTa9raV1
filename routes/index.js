const router = require("express").Router();

router.use("/user", require("./auth"));
router.use("/books", require("./books"));
router.use("/checkout", require("./checkout"));

module.exports = router;
