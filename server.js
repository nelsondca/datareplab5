const express = require('express')//Import the Express framework
const res = require('express/lib/response')//Import Express response
const app = express()//Create an instance of the Express application
const port = 4000//Define the port number where the app will listen

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Define a route that has a message when the root URL is acessed
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Message shown when "/whatever" route is accessed
app.get('/whatever', (req, res) => {
    res.send('Goodbye')
})


//a variable name is taken and responds with a message followed by name
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);//pulls from the url
    res.send('Hello' + req.params.name);
})

//Route to send an HTML file from the server to client
app.get('/test', (req, res) => {
    //console.log()
    res.sendFile(__dirname + '/index.html')
})

//Route to handle POST request and respond with a message
app.post('/name', (req, res) => {
    res.send("Hello Post" + req.body.fname);
})


//Defining an API route retrieving a list of books
app.get('/api/books', (req, res) => {

    //
    const data = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];

    //means a resource has been created and responds with a JSON object containing book data
    res.status(200).json({
        //myBooks name of the array
        myBooks: data,//array of books data
        "message": "DOOM"//message
    });
})

//Route to handle a query with the parameters fnam and lname
app.get('/name', (req, res) => {
    res.send("Hello " + req.query.fname + " " + req.query.lname + " ");
})



//Starts the Express app and listens on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})