const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        
        Name: { type: String, required: true },
        Surname: { type: String, required: true },
        Job: { type: String, required: true },
        Password: { type: String, required: true },
        Username: { type: String, required: true },
        Mail: { type: String },
        Phone: { type: String },
        CreatedAt: { type: String, required: true, default: Date.now},
        IsActive:{type:Boolean,default:true},
        IsDelete:{type:Boolean,default:false}

    }
)

module.exports = mongoose.model('User', UserSchema);
