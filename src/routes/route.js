const express = require('express');
const router = express.Router();

const Controller = require("../controllers/Controller")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.post("/createDeveloper", Controller.createDeveloper)
router.post("/createBatch", Controller.createBatch)
router.get("/listAllBatch", Controller.listAllBatch)
router.get("/listAllDeveloper", Controller.listAllDeveloper)
router.get("/getDeveloper", Controller.getDeveloper)



module.exports = router;