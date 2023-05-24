const router = require("express").Router();
const path = require("path");

const { plotXDependent } = require("./plotProc");

/**
 *
 */
router.get("/xdependent", (req, res) => {
  console.log(req.body);
    let body = req.body

  plotXDependent(body.eq, body.ymin, body.ymax, body.xmin, body.xmax, body.w, body.h, res);
});

/**
 *
 */
router.get("/ydependet", (req, res) => {
  res.sendFile(path.join());
});

/**
 *
 */
router.get("/xydependent", (req, res) => {});

module.exports = router;
