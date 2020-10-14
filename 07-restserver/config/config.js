// port
process.env.PORT = process.env.PORT || 3000;

// environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// expired token
// 60 seconds
// 60 minuts
// 24 hours
// 30 days
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// seed auth
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarollo';

// dba
let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;