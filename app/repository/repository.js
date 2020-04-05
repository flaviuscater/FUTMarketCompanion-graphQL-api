
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const url = 'mongodb://localhost:27017/graphqldb';
const url = 'mongodb://heroku_9jx3xgrr:p7o1dot8meqo3cp5sns1bpkqac@ds139984.mlab.com:39984/heroku_9jx3xgrr';

mongoose.connect(process.env.MONGODB_URI || url);
mongoose.connection.once('open', () =>{
    console.log(`Connected to mongo at ${url}`);

});
mongoose.connection.once('close', () => console.log('Connection closed'));

