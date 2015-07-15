define(['exports', 'fineuploader-client/logging', 'jquery'], function (exports, _fineuploaderClientLogging, _jquery) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var RequirejsTextLoader = (function () {
    function RequirejsTextLoader(requireInstance) {
      _classCallCheck(this, RequirejsTextLoader);

      this.require = requireInstance;
    }

    RequirejsTextLoader.prototype.load = function load(path) {
      _fineuploaderClientLogging.debug('Loading template ' + path + ' using Require JS text loader');

      var promise = _$['default'].Deferred();
      require(['text!' + path], function (markup) {
        promise.resolve(markup);
      });

      return promise;
    };

    return RequirejsTextLoader;
  })();

  exports.RequirejsTextLoader = RequirejsTextLoader;
});