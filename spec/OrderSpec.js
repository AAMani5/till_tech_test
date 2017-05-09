describe("Order", function(){
  'use strict';
  var janeorder;

  beforeEach(function(){
    janeorder = new Order({table:1, pplcount:2, pplnames:['Jane', 'John']});
  });

  it("#new", function(){
    expect(janeorder instanceof Order).toBe(true);
  });

});
