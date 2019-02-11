let router = require('express').Router();
var movieController = require('./movieController');

router.route('/movies')
      .get(movieController.index)
      .post(movieController.new);
router.route('/movies/:movie_id')
      .get(movieController.view)
      .patch(movieController.update)
      .put(movieController.update)
      .delete(movieController.delete);

module.exports = router;