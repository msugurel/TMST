const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema(
    {
   
        Name: { type: String, required: true }
        
    }
)

module.exports = mongoose.model('Role', RoleSchema);
