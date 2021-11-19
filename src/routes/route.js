const express = require('express');
const router = express.Router();
//const authorController = require('../controllers/authorController')
const bookController =require("../controllers/bookcontroller")




 //router.post('/authors',  authorController.createAuthor  );

// router.post('/Book', bookController.createBook  );
 router.get('/books', bookController.getBooks )

router.post('/publisher', bookController.createBook)






module.exports = router;