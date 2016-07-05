var List = require('../models/list');
var expect = require('chai').expect;

describe('list', function(){

  beforeEach(function() {
    list = new List();
  });

  it('starts with an empty array', function(){
    expect(list.viewList()).to.be.an('array');
    expect(list.viewList()).to.be.empty;
  });



});
