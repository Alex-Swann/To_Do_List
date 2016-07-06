var List = require('../src/list').List;
var expect = require('chai').expect;

describe('list', function() {

  beforeEach(function() {
    list = new List();
  });

  it('starts with an empty array', function() {
    expect(list.viewList()).to.be.an('array');
    expect(list.viewList()).to.be.empty;
  });

  it('can add an item to the array', function() {
    list.addToList("hello");
    expect(list.viewList()).to.contain("hello");
  });
});
