
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose');

//Connect to Database 
mongoose.set('useUnifiedTopology', true);

//Insert the link to the NoSQL database.
mongoose.connect('<Insert Link>',{useNewUrlParser: true })

//Create a schema
var  todoSchema =  new mongoose.Schema({
    item: String
});

var  Todo = mongoose.model('Todo',todoSchema );

module.exports=function(app){

app.get('/todo',function(req,res){
    //get data from MongoDB and pass to view
    Todo.find({},function(err,data){
        if(err) throw err;
    res.render('todo',{todos:data});
    });
});


app.post('/todo', urlencodedParser, function(req,res){
    //get data from view and pass to MongoDB
    var newTodo = Todo(req.body).save(function(err,data){
        if(err) throw err;
        res.json(data);
    });
});

app.delete('/todo/:item',function(req,res){
    //delete the requested item from MongoDB
    Todo.find({item: req.params.item.replace(/\-/g," ")}).deleteOne(function(err,data){
        if(err) throw err;
        res.json(data);
    });
});
}