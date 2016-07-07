var TodoItem = require('../src/todoItem.js').TodoItem;
var expect = require('chai').expect;

describe('TodoItem', function() {

  beforeEach(function() {
    todo = new TodoItem('pay bills');
  });

  it("is initialized with the taks passed", function() {
    expect(todo.getTask()).to.equal('pay bills');
  });

  it("completion defaults to false", function() {
    expect(todo.getStatus()).to.be.false; /* jshint ignore:line */
  });

  it('can change completed status', function(){
    todo.changeStatus();
    expect(todo.getStatus()).to.be.true; /* jshint ignore:line */
  });

});
