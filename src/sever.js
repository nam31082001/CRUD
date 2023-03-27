const express=require('express')
const handlebars = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override')
const route=require('./routes/index')
const db=require('./app/config/db')
const app = express();
const port = 3000;

db.connect()
app.use(methodOverride('_method'))
app.engine('handlebars',handlebars.engine({
    defaultLayout:'main',
    extname:'.hbs'
}) );
app.set('view engine', 'handlebars');
app.set('views',  path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

route(app)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
