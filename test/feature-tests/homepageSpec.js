describe('User visits front page', function() {

  it('should be successful', function() {
    browser.assert.success();
  });

  it('title includes "to do list"', function() {
    browser.assert.text('title', 'To Do List');
  });

  it('can add and display items on the list', function() {
    browser
      .fill('#todo_text', 'Go to the bank')
      .pressButton('Add to list');
    browser.assert.text('#todo_list:nth-child(1)', 'Go to the bank');
  });

});
