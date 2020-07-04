const fs = require('fs');


function question() {
    fs.readFile('./input.txt', (err, data) => {
        const dimensionList = data.toString();
        const dimensionS = dimensionList.split('\n');
        const dimension = dimensionS.map(array => array.trim());
        // const replaced = dimension.map(array => array.replace(/\x/g,'*')); // replacing x with * (probably don't need this)
        const lwh = dimension.map(array => array.split('x'));

        console.log(dimensionList)
        console.log(lwh);
    })
}

question()

