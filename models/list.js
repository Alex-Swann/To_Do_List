function List() {
  this.list = [];
}

List.prototype = {
  viewList: function(){
    return this.list;
  }
};

module.exports = List;
