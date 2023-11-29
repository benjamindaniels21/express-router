const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  // using router will keep all these routes behind this middleware
  if (req.query.isAdmin) {
    next();
  }
  res.send("Sorry, not an admin!");
});

router.get("/topsecret", (req, res) => {
  res.send("this is top secret!");
});

router.get("/deleteeverything", (req, res) => {
  res.send("deleted everything!");
});

module.exports = router;
