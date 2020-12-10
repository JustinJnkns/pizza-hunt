const mongoose = require('mongoose')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));
// mongoose connects to app on start up
//MONGOD_URI if connecting thru Heroku, 'mongodb://localhost/pizza-hunt' otherwise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//use this to log mongo queeries being executed!
mongoose.set('debug', true);


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));