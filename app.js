//DRILL 1 

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/sum', (req, res) => {
    //1. get values from the request
    const a = req.query.a;
    const b = req.query.b;

    //2.validate the values
    if(!a){
        //3. a wasn't provided
        return res.status(400).send('Please provide a');
    }
    if(!b){
        //3. b wasn't provided
        return res.status(400).send('Please provide b');
    }
    const numbA = parseFloat(a);
    const numbB = parseFloat(b);

    if(Number.isNaN(numbA)){
        return res.status(400).send('a must be a number')
    }

    if(Number.isNaN(numbB)){
        return res.status(400).send('b must be a number')
    }


    const c = numbA + numbB;
    //4. and 5. both res are valid- process plz
    const responseText = `The sum of ${numbA} and ${numbB} is: ${c}
    `;
    res.status(200).send(responseText);
});





//DRILL 2 

app.get('/cipher', (req, res) => {
    //1. get values from the request
    const text = req.query.text;
    const shift = req.query.shift;

    //2.validate the values
    if(!text){
        //3. a wasn't provided
        return res.status(400).send('Please provide text');
    }
    if(!shift){
        //3. b wasn't provided
        return res.status(400).send('Please provide shift');
    }
    const numbShift = parseFloat(shift);

    if(Number.isNaN(numbShift)){
        return res.status(400).send('shift must be a number')
    }

    const c = numbA + numbB;
    //4. and 5. both res are valid- process plz
    const cipher = 
    `;
    res.status(200).send(cipher);
});



//DRILL 3 

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});