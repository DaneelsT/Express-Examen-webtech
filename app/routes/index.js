var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/exam',
  (err, database) => {
    if (err) return console.log(err)
    db = database.db('exam')
    db.createCollection("students", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
    })
  })

  router.get("/", (req,res) => {
    var nameSort = { name: 1 };
    db.collection('students').find().sort(nameSort).toArray((err, result) => {
      if (err) return
      res.render('list.ejs', {students: result})
    })
  })

  router.get("/add", (req,res) => {
    db.collection('students').find().toArray((err, result) => {
      if (err) return
      res.render('add.ejs', {})
    })
  })

  router.post("/add", (req, res) => {
      db.collection('students').insertOne(req.body, (err, result) =>{
        if(err) return
        res.redirect("/")
      })
  })

module.exports = router;
