var express =  require('express');
var router =express.Router();

var MongoClient =  require('mongodb').MongoClient ;
var ObjectID = require('mongodb').ObjectID ;

const connection = (closure) => {
    return  MongoClient.connect('mongodb://localhost:27017/webApps',(err ,db) => {
        if(err){
            return console.log(err);
        }
        closure(db);
    })
}

let response = {
    status: 200,
    messege: null,
    data: []
}

var sendError = (err, res) => {
    response.status = 501;
    response.messege = typeof err == 'object' ? err.messege : err ;
    res.status(501).json(response);
}

router.get('/users1',(req,res) => {
    connection((db) =>  {
        db.collection('users').find().toArray().then((users) => {
            response.data = users;
            res.json(response);
        })
    })
})

module.exports = router ;