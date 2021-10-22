const filmRouter = require('./film');

function route(app) {
    app.use('/film', filmRouter);
}

module.exports = route;