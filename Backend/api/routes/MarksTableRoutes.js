module.exports = function(app) {
    var markstable = require('../controllers/MarksTableController');


    app.route('/marks').get(markstable.listAllMarks);

    app.route('/marks').post(markstable.addAllMarks);

    
};