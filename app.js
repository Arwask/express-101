let express = require('express');

let app = express();

//middleware ---> things that happen between request and response

// const logParams = (req, res, next) => {
//   console.log('Middleware function');
//   console.log('req.url', req.url);
//   // console.log('req', req);
//   next(); // <---- move to next middleware. done with this one. It goes to whatver comes next in app.use() but if the next one does not match with the specified url, it will skip and move to the next one
// };

// const another = (req, res, next) => {
//   console.log('Another Middleware function');
//   // console.log('req.params', req.params);
//   console.log('req.url', req.url);
//   next();
// };

// const yetAnother = (req, res, next) => {
//   console.log('yetAnother will run');
//   // console.log('req.params', req.params);
//   console.log('req.url', req.url);
//   next();
// };

// app.use(logParams);
// app.use('/hello', another);
// app.use(yetAnother); // <---- this will not run if its not /hello
// app.get(
//   '/hello',
//   (req, res) => {
//     res.send('Hello! you are on hello page');
//   } //<---- if request type is /hello and is a GET type of request then and only then it will run
// );

let v1routes = require('./routes/'); //<-- node defaults to looking for an index file in that folder when we specify folder/ in the route

app.use('/api/v1', v1routes); //<-- goes to route files and comes back. versioning- set up the pattern match

app.use((req, res, next) => {
  // handling error before the below error handler. handling 404
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  // for when there is an explicit error
  res.status(err.status || 500); // error or generic 500-server error
  res.json({
    // we can send a json
    message: 'Error!!',
    err: err
  });
});

app.listen(3000, () => {
  console.log('Listening to PORT 3000');
});
