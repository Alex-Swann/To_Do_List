(function(){
  'use strict';
})();

(function(exports) {
  function List() {
    this._list = [];
  }
  List.prototype = {
    viewList: function() {
      return this._list;
    },
    addToList: function(task, func) { /* jshint ignore:line */
      var obj = new func(task);
      this._list.push(obj);
    }
  };
  exports.List = List;
})(this);
