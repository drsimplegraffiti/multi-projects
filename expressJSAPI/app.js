const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

// Init middleware
// app.use(logger);


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