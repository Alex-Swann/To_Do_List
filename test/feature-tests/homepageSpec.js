describe('User visits front page', function() {

  it('should be successful', function() {
    browser.assert.success();
  });

  it('title includes "to do list"', function() {
    browser.assert.text('title', 'To Do List');
  });

  // it('content includes a default to do list', function() {
  //   browser.assert.text('body', 'Go to the bank');
  // });

});
