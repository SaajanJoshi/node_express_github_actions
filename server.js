var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "https://nodegithubaction.azurewebsites.net"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the 'views' directory


// http://localhost:3000/
app.get('/', function (req, res) {
    res.render('index'); // Render the 'index.ejs' template
});

//http://localhost:3000/
// app.get('/', function (req, res) {
//     res.send(`<a href="${SERVER_HOST}/name">Name</a><br>
//               <a href="${SERVER_HOST}/admin">Admin Page</a><br>
//             `)


// })

app.get('/name', function (req, res) {
  res.send("<h1>Saajan Joshi (C0871662)</h1>")
})

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

//http://localhost:3000/admin
app.get('/admin', (req, res) => {
  res.send('Admin Homepage')
})

//http://localhost:3000/user/100
app.get("/user/:id", (req, res)=> {
      res.send(`User ID: ${req.params.id}`);
    }
)

//http://localhost:3000/valueofday/1980-01-24
app.get("/valueofday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})", (req, res) => {
  console.log(req.params)
  res.send(req.params)
});
  
app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})
