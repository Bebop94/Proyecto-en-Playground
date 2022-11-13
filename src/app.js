//Requires
const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter')
const productRouter = require('./router/productRouter');
const userRouter = require('./router/userRouter');
const methodOverride = require('method-override');

//App Express
const app = express();
const session = require('express-session');

//Run server
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, ()=>{
    console.log('Servidor funcionando en el puerto', port);
    console.log('Visitar MercadoLiebre en el siguiente link: http://localhost:' + port + '/');
});

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({ secret : 'A'}));

//Template Engines
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './views'));

//Route system
app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

//Error path
app.use((req, res, next) => {
    res.status(404).send('Jimmy Page not found')
});