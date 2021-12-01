const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MaterialSchema = new Schema(
    {

        Name: { type: String, required: true }        

    }
)

module.exports = mongoose.model('Material', MaterialSchema);
