var express = require('express');
var router = express.Router();
var Model = require("../models/Stock");

router.get("/", (req, res) => {
  Model.find({}, (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});
router.get("/all", function (req, res, next) {

  Model.aggregate([
    
    { $set: { MaterialId: { $toObjectId: "$MaterialId" } } },
    { $lookup: {
      from: "materials",
      localField:'MaterialId',        
      foreignField: '_id',
      as:'Material'
    }},
    { $set: { 'WarehouseId': { $toObjectId: "$WarehouseId" } } },
    { $lookup: {
      from: "warehouses",
      localField:'WarehouseId',        
      foreignField: '_id',
      as:'Warehouse'
    }},
    {$project:{
      _id:1,
      Quantity:1,
      ProcessDate:true,
      SKT:1,
      CreatedAt:1,
      'MaterialName':{ "$arrayElemAt": ["$Material.Name", 0] },
      'WarehouseName':{ "$arrayElemAt": ["$Warehouse.Name", 0] },
}}
  ]).then((data) => { res.json(data); })
    .catch((err) => { res.json(err); })
});
router.get("/:Id", (req, res,next) => {
  Model.findById({"_id":req.params.Id}, (err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

router.post("/", function (req, res) {
  const newModel = new Model(req.body);
  newModel.save((err, data) => {
    if (err) res.json(err);
    res.json(data);
  });
});

router.put("/:Id", (req, res,next) => {
  Model.findByIdAndUpdate(req.params.Id,req.body,{new:true})
                .then((data)=>{res.json(data);})
                .catch((err)=>{res.json(err);})
});

router.delete("/:Id", (req, res,next) => {
Model.findByIdAndRemove(req.params.Id)
              .then((data)=>{res.json(data);})
              .catch((err)=>{res.json(err);})
});



module.exports = router;