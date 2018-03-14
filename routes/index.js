'use strict';

const { Router } = require('express');
const router = Router();
router.use(require('./shows'));
router.use(require('./movies'));

// show users your endpoints on index page. kinda like documentation
router.get('/', (req, res) => {
  res.json({
    shows: 'api/v1/shows',
    movies: 'api/v1/movies'
  });
});

module.exports = router;

// "db:reset" : "node db/build-db"  <---put this in script portion in package.json to run the database making js file just once or whenever you want. write npm run db:reset
