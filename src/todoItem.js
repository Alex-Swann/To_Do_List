(function(){
  'use strict';
})();

(function(exports) {
  function TodoItem(task) {
    this._task = task;
    this._completedStatus = false;
  }

  TodoItem.prototype = {
    getTask: function() {
      return this._task;
    },
    getStatus: function() {
      return this._completedStatus;
    }
  };

  exports.TodoItem = TodoItem;

})(this);
