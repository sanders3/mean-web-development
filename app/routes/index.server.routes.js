module.exports = function indexRoute(app) {
    const index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};