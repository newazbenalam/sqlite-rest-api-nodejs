const express = require('express');
const { getAllUsers, getAllProducts} = require('../controllers');
const router = express.Router();


// router.delete("/getblogsComments:id", deleteComments);
// router.delete("/getBlogs:id", deleteBlogs);

// router.get("/getblogsComments:id", getComments);
// router.get("/getBlogs", getBlogs);

// router.post("/getblogsComments", createComments);
// router.post("/getBlogs", CreateBlogs);

// router.put("/getblogsComments", updateComments);
// router.put("/getBlogs", updateBlogs);

router.get("/getAllUsers", getAllUsers);
router.get("/getAllProducts", getAllProducts);

module.exports = router;