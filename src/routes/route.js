const express = require('express');
const router = express.Router();
//const UserModel= require("../models/userModel")

//const UserController= require("../controllers/userController")

const BookController =require("../controllers/bookcontroller")
const BookModel = require("../models/bookModel")
const AuthorModel= require("../models/AuthorModel")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//router.post('/createNewBook',  UserController.createNewBook  );
//router.get('/getBooks',  UserController.getBooks  );

//router.post('/createBook',  bookController.createBook  );
//router.get('/allBooksList', bookController.allBookslist  );

//router.post('/ParticularBooks',  bookController.ParticularBooks  );
 //router.post('/yeardetails',bookController.yeardetails);

//router.get('/XINRBooks',  bookController.XINRBooks  );
//router.get('/RandomBooks', bookController.RandomBooks  );

router.post('/createBooks', BookController.createBooks);
router.post('/createAuthor', BookController.createAuthor);

router.get('/authorBooks', BookController.authorBooks);
router.get('/updatedData', BookController.updatedData );

router.get('/findBooks', BookController.findBooks);



module.exports = router;