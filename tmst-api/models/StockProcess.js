const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockProcessSchema = new Schema(
    {
        
        StockId: { type: String, required: true },
        Quantity: { type: Number, default:0, required: true },
        UserId: { type: String, required: true },
        UsingTypeId: { type: String, required: true },
        ProcessDate: { type: Date, required: true }

    }
)

module.exports = mongoose.model('StockProcess', StockProcessSchema);
