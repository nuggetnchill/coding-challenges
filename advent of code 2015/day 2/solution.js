const fs = require('fs');

// Part 1
function question1() {
    fs.readFile('./input.txt', (err, data) => {
        const dimensionList = data.toString();
        const dimensionS = dimensionList.split('\n'); //split into multiple strings
        const dimension = dimensionS.map(array => array.trim()); // trim \r (later found out i don't have to trim \r)
        const lwh = dimension.map(array => array.split('x'));  // remove x and split into multiple arrays
        
        // calculate SURFACE AREA of each box and return an array
        const boxes = lwh.map( (a) => {
            let surfaceArea = (a[0]*a[1]*2) + (a[0]*a[2]*2) + (a[1]*a[2]*2)
            return surfaceArea
            })
            
        // area of smallest side for slack
        const slack = lwh.map((a) => {
            let smallest =  Math.min( (a[0] * a[1]), (a[0] * a[2]), (a[1] * a[2]));
            return smallest;
        })
        
        // Total SURFACE AREA
        const totalSA = boxes.reduce((acc,val) => acc + val)

        //Total SLACK AREA
        const totalSlack = slack.reduce((acc,val) => acc + val)

        // Log final answer
        console.log(totalSA + totalSlack)

    })
}

question1()

// Part 2

function question2() {
    fs.readFile('./input.txt', (err, data) => {
        const input = data.toString().split('\n')
        const result = input.reduce((total, _lwh) => {
            const lwh = _lwh.split('x')
            const length = parseInt(lwh[0]);
            const width = parseInt(lwh[1]);
            const height = parseInt(lwh[2]);
            const max =  Math.max(length, width,height) *  2 ;
            
            return total 
                    + ( length + length + width + width + height + height - Math.max(length, width,height) - Math.max(length, width,height)  )
                    + ( length * width * height ) 
              
        },0);
            console.log(result);
        })
}

question2();
