const { Router } = require('express');
const router = Router();

// show users your endpoints on index page. kinda like documentation
router.get('/shows', (req, res) => {
  res.status(200).json({
    name: 'Breaking Bad'
  });
});

module.exports = router;
