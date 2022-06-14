// require the library 
const mongoose = require('mongoose');


// set up default mongoose connection
mongoose.connect('mongodb://localhost/todo');


// get reference to database
const db = mongoose.connection;


// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));


// bind connection to success event (to get notification of successful connection)
db.once('open', function() {
  console.log('Connected to mongoDB');
});