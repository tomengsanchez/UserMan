const express = require('express')
const app = express()
const morgan = require("morgan");
const bodyParser = require('body-parser');
const mainRouter = require('./src/main/routes');
const usersRouter = require('./src/users/routes/routes');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
 })); 

 

app.use('/',mainRouter);
// app.use('/user',userRouter);
const port= 3100;
app.listen(port,()=>{
    console.log(`A node is listening on port : ${port}`);
});



