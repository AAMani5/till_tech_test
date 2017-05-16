describe("CafeTill", function(){
  'use strict';

  var cafetill, myorder;

  beforeEach(function(){
    cafetill = new CafeTill(cafedetails, Order)
  });

  it("#new", function(){
    expect(cafetill instanceof CafeTill).toBe(true);
  });

  it("#createOrder", function(){
    myorder = cafetill.createOrder({table:1, pplcount:2, pplnames:['Jane', 'John']})
    expect(myorder instanceof Order).toBe(true);
  });

});
