const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema(
    {
        Id: { type: Schema.ObjectId, required: true },
        MaterialId: { type: String, required: true },
        Quantity: { type: String, required: true },
        SKT: { type: String, required: true },
        CreatedAt: { type: Date, default: Date.now },
        WarehouseId: { type: String, required: true }

    }
)

module.exports = mongoose.model('Stock', StockSchema);
