const express = require('express');
const path = require('path');


const app = express();


const players = [{
    id: 1,
    name: "Jane smith",
    email: "janesmith@gmail.com",
    status: "active"
}, {
    id: 2,
    name: "tye rock",
    email: "tyerock@gmail.com",
    status: "active"
}, {
    id: 3,
    name: "bruce lee",
    email: "brucelee@gmail.com",
    status: "active"
}]

//route
app.get('/api/players', (req, res) => {
        res.json(players)
    })
    //set static folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})