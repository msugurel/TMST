const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WarehouseSchema = new Schema(
    {
      
        Name: { type: String, required: true },
        Address: { type: String},
        Phone: { type: String }

    }
)

module.exports = mongoose.model('Warehouse', WarehouseSchema);
