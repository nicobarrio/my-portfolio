const express = require('express');
const mysql = require('mysql2');
const path = require('path'); 
const app = express();

const publicPath = path.join(__dirname ,'/public');

const PORT = 3024;
    app.listen(PORT , ()=>{
        console.log('Servidor corriendo ...')
    });

//ejs
app.set('view engine', 'ejs'); 
app.set("views", path.join(__dirname, "views"));

// rutas
const route = requiere('./routes/route.js');

const methodOverride = require('method-override'); 
app.use(methodOverride('_method')); 


//post
app.use(express.urlencoded( { extended:false } ));
app.use(express.json());

//
app.use(express.static(publicPath));

app.use('/', route);