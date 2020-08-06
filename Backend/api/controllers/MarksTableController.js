var mongoose = require('mongoose');

Mark = mongoose.model('Marks');

exports.listAllMarks = function(req, res) {
    Mark.find({}, function(err, marks) {
      

       res.json({ student:marks });
   });
};

exports.addAllMarks = function(req, res) {
    var newMark = new Mark(req.body);

    newMark.save(function(err, marks) {
      

        res.json({student:marks});
    });
};



