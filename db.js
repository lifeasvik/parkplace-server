const Pool = require("pg").Pool 

const Pool = new Pool ({
    user: "vikbirdi",
    host: "localhost",
    port: 5432,
    database: "parkplace"
});

module.exports = pool;