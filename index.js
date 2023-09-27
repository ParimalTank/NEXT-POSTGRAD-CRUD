const express = require('express')
const bodyParser = require('body-parser')
const { default: pool } = require('./queries')
//import the routes
const AllRoutes = require('./routes/routes');
const app = express()
const port = 3000

// app.use(bodyParser.json())
// for parsing the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(AllRoutes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

//configure the app.
app.use(AllRoutes);