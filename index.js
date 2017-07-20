/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-justgage',

  included: function (app) {
    this._super.included.apply (this, arguments);

    app.import (app.bowerDirectory + '/justgage/raphael-2.1.4.min.js');
    app.import (app.bowerDirectory + '/justgage/justgage.js');
  }
};
