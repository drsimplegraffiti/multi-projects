const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger')
const players = require('./players');


const app = express();

// Init middleware
// app.use(logger);


//Handlebars middle-wares
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Homepage route
app.get('/', (req, res) => res.render('index', { title: 'Players App', players }));


//Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Players API Routes
app.use('/api/players', require('./routes/api/players'))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})