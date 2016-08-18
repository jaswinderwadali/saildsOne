/**
 * FirstController
 *
 * @description :: Server-side logic for managing firsts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `FirstController.fetch_list()`
   */
  fetch_list: function (req, res) {
  	var name = req.param('name');
    return res.json({
      entered_name: name
    });
  }
};

