var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var PeopleSchema = new Schema({
    people_predict: Array,
    Timestamp: {
        type: Date,
        default: new Date
    }
})

mongoose.model('people_predict', PeopleSchema);