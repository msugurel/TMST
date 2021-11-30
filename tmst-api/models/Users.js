const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema(
    {
        Id: { type: Schema.ObjectId, required: true },
        Name: { type: String, required: true },
        Surname: { type: String, required: true },
        Job: { type: String, required: true },
        Password: { type: String, required: true },
        Username: { type: String, required: true },
        Mail: { type: String, required: true },
        Phone: { type: Date, default: Date.now },
        CreatedAt: { type: String, required: true },
        IsActive: { type: Number, default: 0 },
        IsDelete: { type: String, required: true }

    }
)

module.exports = mongoose.model('User', UsersSchema)