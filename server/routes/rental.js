const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");
const cors = require('cors');

router.get("", cors(), function(req, res,next) {
  Rental.find({}, (err, foundRentals) => {
    res.json(foundRentals);
  });
});

router.get("/:id", cors(), (req, res,next) => {
  Rental.findById(
    req.params.id,((err,foundRentals) => {
        if(err){
            res.status(422).send({errors:[{title:'Rental error',detail:'could not find data'}]})
        }

      res.json(foundRentals);
    })
  );
});

module.exports = router;
