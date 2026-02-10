const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const acercaRouter = require('./routes/acerca');
const trabajosRouter = require('./routes/trabajos');
const comisionesRouter = require('./routes/comisiones');
const contactoRouter = require('./routes/contacto');
const contactoaRouter = require('./routes/contactoa');
const registroRouter = require('./routes/registro');
//const authRouter = require('./routes/auth');
//const comentariosRouter = require('./routes/comentarios');
//const comentsRouter = require('./routes/coments');

const app = express();

//configuracion de session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* Seteamos las carpetas de vistas */
app.engine('hbs', hbs({
  extname:'.hbs',
  defaultLayout: 'layout',
  layoutsDir: 'views/layout',
  partialsDir: 'views/partials'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('images'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/acerca', acercaRouter);
app.use('/trabajos', trabajosRouter);
app.use('/comisiones', comisionesRouter);
app.use('/contacto', contactoRouter);
app.use('/contactoa', contactoaRouter);
app.use('/registro', registroRouter);
//app.use('/auth', authRouter);
//app.use('/comentarios', comentariosRouter);

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
