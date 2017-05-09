describe("Feature Tests", function(){
  'use strict';

  var cafetill, janeorder;

  beforeEach(function(){
    cafetill = new CafeTill(cafedetails, Order);
  });

  it("can take order and print bill", function(){
    janeorder = cafetill.createOrder({table:1, pplcount:2, pplnames:['Jane', 'John']})
    expect(janeorder instanceof Order).toBe(true)
    expect(function(){janeorder.addItem({quantity: 2, name: 'Cafe Latte'})}).not.toThrow();
  });

});
