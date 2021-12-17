const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockProcessSchema = new Schema(
    {
        
        StockId: { type: String, required: true },
        Quantity: { type: Number, default:0, required: true },
        UserId: { type: String, required: true },
        UsingTypeId: { type: String },
        ProcessDate: { type: Date, required: true,default:Date.now }

    }
)

module.exports = mongoose.model('StockProcess', StockProcessSchema);
