const { Router } = require('express');
const router = Router();
console.log();
// show users your endpoints on index page. kinda like documentation
router.get('/movies', (req, res) => {
  res.status(200).json({
    name: 'Pulp Fiction'
  });
});

module.exports = router;
// router here is an instance of express on this page only and to be able to use it, we need to mount all the instances on index which is mounted on to the main instance on app.js
