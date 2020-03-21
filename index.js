require('dotenv').config();

const server = require("./server.js");

server.listen(7000, () => {
    console.log("\n* === Server listening on port 7000 === *\n");
})
