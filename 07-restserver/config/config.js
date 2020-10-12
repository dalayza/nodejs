// port
process.env.PORT = process.env.PORT || 3000;

// environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// dba
let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = '';
}

process.env.urlDB = urlDB;