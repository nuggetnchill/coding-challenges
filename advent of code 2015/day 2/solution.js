const fs = require('fs');

function question() {
    fs.readFile('./input.txt', (err, data) => {
        const dimensionList = data.toString();
        const dimensionS = dimensionList.split('\n'); //split into multiple strings
        const dimension = dimensionS.map(array => array.trim()); // trim \r
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
        }
        )
        
        // Total SURFACE AREA
        const totalSA = boxes.reduce((acc,val) => {
            return acc + val;
        })

        //Total SLACK AREA
        const totalSlack = slack.reduce((acc,val) => {
            return acc + val;
        })

        // Log final answer
        console.log(totalSA + totalSlack)

    })
}

question()

