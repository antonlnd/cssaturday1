const fs = require('fs');

function Table (filepath) {
    this.filepath = filepath;
}
Table.prototype.read = (id) => {
    var json_file = Table.toFilename(id);
    console.log(fs.readFile(this.filepath + json_file));
}


Table.toFilename = (id) => {return id.toString() + '.json'}

Table.toId = (fn) => {
    return fn.slice(0,fn.indexOf('.'))}
module.exports = Table;

