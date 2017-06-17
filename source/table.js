const fs = require('fs');

function Table(filepath) {
    this.filepath = filepath;

}

Table.prototype.read = function (id) {

    var json_file = Table.toFilename(id);
 
 try{var content =  fs.readFileSync(this.filepath + '/' + json_file, 'utf8')}

 
 catch(err)
{return;}
     
 
    
    
 
    return JSON.parse(content + "")  

}

Table.toFilename = (id) => { return id.toString() + '.json' }

Table.toId = (fn) => {
    return fn.slice(0, fn.indexOf('.'))
}
module.exports = Table;