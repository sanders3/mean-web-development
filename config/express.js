const express = require('express');

module.exports = function configExpress() {
    const app = express();

    require('../app/routes/index.server.routes')(app);

    return app;
}
