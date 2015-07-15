import {debug} from 'fineuploader-client/logging';
import $ from 'jquery';

export class RequirejsTextLoader{
  constructor(requireInstance){
    this.require = requireInstance;
  }

  load(path){
    debug(`Loading template ${path} using Require JS text loader`);

    var promise = $.Deferred();
    require(["text!" + path], function(markup){
      promise.resolve(markup);
    });

    return promise;
  }
}
