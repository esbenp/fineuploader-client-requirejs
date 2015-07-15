System.register(['fineuploader-client/logging', 'jquery'], function (_export) {
  'use strict';

  var debug, $, RequirejsTextLoader;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_fineuploaderClientLogging) {
      debug = _fineuploaderClientLogging.debug;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      RequirejsTextLoader = (function () {
        function RequirejsTextLoader(requireInstance) {
          _classCallCheck(this, RequirejsTextLoader);

          this.require = requireInstance;
        }

        RequirejsTextLoader.prototype.load = function load(path) {
          debug('Loading template ' + path + ' using Require JS text loader');

          var promise = $.Deferred();
          require(['text!' + path], function (markup) {
            promise.resolve(markup);
          });

          return promise;
        };

        return RequirejsTextLoader;
      })();

      _export('RequirejsTextLoader', RequirejsTextLoader);
    }
  };
});