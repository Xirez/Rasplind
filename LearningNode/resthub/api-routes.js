let router = require('express').Router();
var contactController = require('./contactController');

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

// Contact routes
router.route('/contacts')
      .get(contactController.index)
      .post(contactController.new);
router.route('/contacts/:contact_id')
      .get(contactController.view)
      .patch(contactController.update)
      .put(contactController.update)
      .delete(contactController.delete);

module.exports = router;