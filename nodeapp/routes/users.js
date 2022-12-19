var express = require('express');
var router = express.Router();
var db=require('../connection');
router.get('/display', function(req, res) {
  db.query('SELECT * FROM covid_details', function (err, result) {
    if (err) throw err;
      console.log({data:result})
    ///res.render() function
    res.render('display',{data:result});
  });
});


router.post('/create', function(req, res, next) {
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO covid_details SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("Data is inserted successfully "); 
  });
  res.redirect('/users/display');  // redirect to user form page after inserting the data
}); 

module.exports = router;