'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fineuploaderClientLogging = require('fineuploader-client/logging');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var RequirejsTextLoader = (function () {
  function RequirejsTextLoader(requireInstance) {
    _classCallCheck(this, RequirejsTextLoader);

    this.require = requireInstance;
  }

  RequirejsTextLoader.prototype.load = function load(path) {
    _fineuploaderClientLogging.debug('Loading template ' + path + ' using Require JS text loader');

    var promise = _jquery2['default'].Deferred();
    require(['text!' + path], function (markup) {
      promise.resolve(markup);
    });

    return promise;
  };

  return RequirejsTextLoader;
})();

exports.RequirejsTextLoader = RequirejsTextLoader;