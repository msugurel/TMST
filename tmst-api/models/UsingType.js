const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsingTypeSchema = new Schema(
    {
        
        Name: { type: String, required: true }

    }
)

module.exports = mongoose.model('UsingType', UsingTypeSchema);
