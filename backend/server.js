const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
    origins: (origin, callback) =>
        (CORS_WHITE.indexOf(origin) !== -1)
        ? callback(null, true)
        : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
    app.use(cors(corsOptions));

    app.use(bodyParser.json());
};

module.exports = configureServer;



