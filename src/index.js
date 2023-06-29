const express = require('express')
const morgan = require('morgan')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 8000;
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const bodyParser  = require('body-parser')
const cookieParser = require('cookie-parser') 
const swaggerUI = require("swagger-ui-express");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(cookieParser())

//HTTP logger
app.use(morgan('combined'))

// lấy file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
})); 
app.use(express.json()); 

    // khởi tạo tuyến đường
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
const route = require('./routes');
// const { homedir } = require('os');

app.use(session({
  secret: '<YOUR_SECRET>',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

route(app);
app.use(session({
        secret: '<YOUR_SECRET>',
        resave: false,
        saveUninitialized: true,
      }));
    app.use(passport.initialize());
    app.use(passport.session());
const db = require('./config/db')

// db.connect();




// app.use("/api-swagger", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})