describe("CafeTill", function(){
  'use strict';

  var cafetill, myorder, printer, tableDetails;

  beforeEach(function(){
    printer = jasmine.createSpyObj('printer', ['printBill']);
    printer.printBill.and.callFake(function() {return cafedetails['shopName'];});
    tableDetails = {table:1, pplcount:2, pplnames:['Jane', 'John']}
    cafetill = new CafeTill(cafedetails, Order, printer)
  });

  it("#new", function(){
    expect(cafetill instanceof CafeTill).toBe(true);
  });

  it("#createOrder", function(){
    myorder = cafetill.createOrder(tableDetails)
    expect(myorder instanceof Order).toBe(true);
  });

  it("#printBill", function(){
    expect(cafetill.printBill()).toEqual(cafedetails['shopName'])
  })

});
