const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.connect(mongodb.URI, {
    useCreateIndex: true,
    useNewUrlParser: true
    
}
)
console.log("succes!!!");




