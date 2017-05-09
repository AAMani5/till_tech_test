describe("Feature Tests", function(){
  'use strict';

  var cafetill;

  beforeEach(function(){
    cafetill = new CafeTill(cafedetails);
  });

  it("can take order and print bill", function(){
    expect(function(){cafetill.createOrder({table:1, pplcount:2, pplnames:['Jane', 'John']})}).not.toThrow();
  });

});
