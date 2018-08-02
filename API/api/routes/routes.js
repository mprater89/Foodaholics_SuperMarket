'use strict';

module.exports = function(app) {
    var controllerList = require('../controllers/controller');

    // Routes
    app.route('/top5')
        .post(controllerList.gettop5);
    // .get(controllerList.gettop5);
}