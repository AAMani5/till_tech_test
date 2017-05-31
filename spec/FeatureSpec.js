describe("Feature Tests", function(){
  'use strict';

  var cafetill, printer, janeorder, orderItem, totalBeforeTax, totalAfterTax, taxpercent;

  beforeEach(function(){
    printer = new Printer(cafedetails);
    cafetill = new CafeTill(cafedetails, Order, printer);
    orderItem = {quantity: 2, name: 'Cafe Latte'};
    taxpercent = 8.64;
    totalBeforeTax = (cafedetails['prices'][0][orderItem['name']] * orderItem['quantity']);
    totalAfterTax = Math.round(108.64 * totalBeforeTax)/100;
  });

  it("can take order and print bill", function(){
    janeorder = cafetill.createOrder({table:1, pplcount:2, pplnames:['Jane', 'John']})
    expect(janeorder instanceof Order).toBe(true)
    expect(function(){janeorder.addItem(orderItem)}).not.toThrow();
    expect(janeorder.totalBeforeTax()).toEqual(totalBeforeTax);
    expect(janeorder.totalAfterTax()).toEqual(totalAfterTax);
    expect(cafetill.printBill()).toEqual(cafedetails['shopName']);
  });

});
