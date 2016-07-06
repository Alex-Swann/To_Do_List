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
    addToList: function(element) {
      this._list.push(element);
    }
  };
  exports.List = List;
})(this);
