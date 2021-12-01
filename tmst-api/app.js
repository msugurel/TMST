var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var materialsRoute = require('./routes/materials')
var rolesRoute = require('./routes/roles')
var stockprocessRoute = require('./routes/stockprocess')
var stocksRoute = require('./routes/stocks')
var user_role_mapsRoute = require('./routes/user_role_maps')
var usingtypesRoute = require('./routes/usingtypes')
var warehousesRoute = require('./routes/warehouses')

var app = express();

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://dbUser:dbUser90%2a-@tmstdb.ki1bq.mongodb.net/TMSTDB');

}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/materials',materialsRoute)
app.use('/roles',rolesRoute)
app.use('/stockprocess',stockprocessRoute)
app.use('/stocks',stocksRoute)
app.use('/user_role_maps',user_role_mapsRoute)
app.use('/usingtypes',usingtypesRoute)
app.use('/warehouses',warehousesRoute)

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

module.exports = app;
