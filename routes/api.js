const router = require("express").Router()


router.use("/plot", require("./plot/plot.js"))



module.exports = router