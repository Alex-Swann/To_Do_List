function List() {
  this.list = [];
}

List.prototype = {
  viewList: function() {
    return this.list;
  },
  addToList: function(element) {
    this.list.push(element);
  }
};

module.exports = List;
