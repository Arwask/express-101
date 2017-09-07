'use strict';

const { Router } = require('express');
const router = Router();
router.use(require('./shows'));

// show users your endpoints on index page. kinda like documentation
router.get('/', (req, res) => {
    res.json({
        "shows" : "api/v1/shows",
        "movies" : "api/v1/movies"
    })
})

module.exports = router;