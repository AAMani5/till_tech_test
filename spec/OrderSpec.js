describe("Order", function(){
  'use strict';
  var cafetill, janeorder;

  beforeEach(function(){
    cafetill = jasmine.createSpyObj('cafetill', ['createOrder']);
    cafetill.createOrder.and.callFake(function() {return new Order({table:1, pplcount:2, pplnames:['Jane', 'John']});});
    janeorder = cafetill.createOrder({table:1, pplcount:2, pplnames:['Jane', 'John']});
  });

  it("#new", function(){
    expect(janeorder instanceof Order).toBe(true);
  });

  it("#addItem", function() {
    expect(function(){janeorder.addItem({quantity: 2, name: 'Cafe Latte'})}).not.toThrow();
  });

});
