var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:test@localhost:5432/postgres')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var cartRouter = require('./routes/cart');
var cart_itemRouter = require('./routes/cart_item');
var orders_itemRouter = require('./routes/orders_item');
var rolesRouter = require('./routes/roles');
var providerRouter = require('./routes/provider');
var productRouter = require('./routes/product');

var app = express();

session          = require("./session.js")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
    req.db = db;
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/orders_item', orders_itemRouter);
app.use('/cart', cartRouter);
app.use('/cart_item', cart_itemRouter);
app.use('/product', productRouter);
app.use('/provider', providerRouter);
app.use('/roles', rolesRouter);

var api      = require('./routes/api');
app.use('/api', api);
var api_auth = require('./routes/api/auth');
api.use('/auth', api_auth);

var api_users = require('./routes/api/users');
api.use('/users', api_users);
var api_orders = require('./routes/api/orders');
api.use('/orders', api_orders);
var api_orders_item = require('./routes/api/orders_item');
api.use('/orders_item', api_orders_item);
var api_cart = require('./routes/api/cart');
api.use('/cart', api_cart);
var api_cart_item = require('./routes/api/cart_item');
api.use('/cart_item', api_cart_item);
var api_product = require('./routes/api/product');
api.use('/product', api_product);
var api_provider = require('./routes/api/provider');
api.use('/provider', api_provider);
var api_roles = require('./routes/api/roles');
api.use('/roles', api_roles);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

db.one('SELECT $1 AS value', 123)
.then((data) => {
  console.log('DATA:', data.value)
})
.catch((error) => {
  console.log('ERROR:', error)
})

module.exports = app;
