const express = require("express");
const router = express.Router();
const Rental = require("../models/rental");

router.get("", function(req, res) {
  Rental.find({}, (err, foundRentals) => {
    res.json(foundRentals);
  });
});

router.get("/:id", (req, res) => {
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
