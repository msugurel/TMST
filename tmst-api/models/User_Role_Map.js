const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User_Role_MapSchema = new Schema(
    {
        
        UserId: { type: String, required: true },
        RoleId: { type: String, required: true },
        CreatedAt: { type: Date, default: Date.now }
        

    }
)

module.exports = mongoose.model('User_Role_Map', User_Role_MapSchema);
