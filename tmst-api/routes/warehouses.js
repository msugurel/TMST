var express = require('express');
var router = express.Router();
var Model = require("../models/Warehouse");

router.get("/", (req, res) => {
  Model.find({}, (err, data) => {
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