// require the library
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 8000;
// imporing the database
const db = require('./config/mongoose');
const Todo = require('./models/todo');
// setting up the view engine and the views folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// setting up the static files
app.use(express.urlencoded());
app.use(express.static("assets"));

// setting up the controllers
app.get('/', function(req, res){
    Todo.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching data from db');
            return;
        }
        return res.render('index', {
            tasks: todos,
            title: 'Todo List'
        });
    });
});

// taking input from the form

app.post('/addtask', function(req, res){
    Todo.create({
        desc: req.body.desc,
        categ: req.body.categ,
        date: req.body.date,
        priority: req.body.priority
    }, function(err, newTodo){
        if(err){
            console.log('Error in creating a new todo');
            return;
        }
        console.log('*******', newTodo);
        return res.redirect('back');
    });
});
// deleting the task
app.get('/deletetask', function(req, res){
    let id = req.query.id;
        Todo.findByIdAndDelete(id, function(err){
            if(err){
                console.log('Error in deleting a todo');
                return;
            }
            return res.redirect('back');
        });
});
// litening to the port
app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port ' + port);
    }
});
