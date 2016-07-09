(function(){
  'use strict';
})();

var TodoItem = require('../src/todoItem').TodoItem;
var List = require('../src/list').List;
var expect = require('chai').expect;

describe('list', function() {

  beforeEach(function() {
    list = new List();
  });

  it('starts with an empty array', function() {
    expect(list.viewList()).to.eql([]);
  });

  it('can add an item to the array', function() {
    list.addToList("hello", TodoItem);
    expect(list.viewList()[0].getTask()).to.contain("hello");
  });
});
