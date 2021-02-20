
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//const url = 'mongodb://localhost:27017/graphqldb';
const url = 'mongodb+srv://admin:admin1234@futmarketcluster.0p5up.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || url);
mongoose.connection.once('open', () =>{
    console.log(`Connected to mongo at ${url}`);

});
mongoose.connection.once('close', () => console.log('Connection closed'));

