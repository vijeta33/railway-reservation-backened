const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const authorController =require("../controllers/Authorcontroller")






router.post('/BASE_URL/authors', authorController.createAuthor )



router.post('/blogs', authorController.myBlogCreation )
router.get('/getdata',authorController.returnBlogsFiltered);






module.exports = router;