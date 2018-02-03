const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;


const app = express();

app.use('', express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/about', (req,res)=>{
    res.send("Website coded by robbinson");
});


app.listen(port, () => console.log('Server running'));