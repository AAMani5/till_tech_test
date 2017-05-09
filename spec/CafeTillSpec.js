describe("CafeTill", function(){
  'use strict';
  
  var cafetill;

  beforeEach(function(){
    cafetill = new CafeTill(cafedetails)
  });

  it("#new", function(){
    expect(cafetill instanceof CafeTill).toBe(true);
  });

});
