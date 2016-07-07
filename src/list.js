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
    addToList: function(item, itemConstructor) { /* jshint ignore:line */
      var obj = new itemConstructor(item);
      this._list.push(obj);
    }
  };
  exports.List = List;
})(this);
