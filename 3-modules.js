const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-granade')

function dataDetails(){
    console.log(data);
    console.log(data.items);
    console.log(data.items[0]);
    console.log(data.singlePerson);
    console.log(data.singlePerson.name);
}

dataDetails()
// sayHi('susan main')
// sayHi(names.john)
// sayHi(names.peter)