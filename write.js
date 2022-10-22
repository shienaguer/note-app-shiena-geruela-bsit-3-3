const fs = require('fs')
const write = function(data = 'none'){
fs.writeFileSync('note.txt', data)
}
module.exports=write
