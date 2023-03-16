var fs = require('fs');
var main = JSON.parse(fs.readFileSync('./data/main.json',
'utf8'));

/* GET Homepage  */
const index = (req, res) => {
    res.render('index', {title:'Travlr Getaways', main});
};
module.exports ={
    index
};
