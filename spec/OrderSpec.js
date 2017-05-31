describe("Order", function(){
  'use strict';
  var cafetill, janeorder, firstItem, tableDetails;

  beforeEach(function(){
    tableDetails = {table:1, pplcount:2, pplnames:['Jane', 'John']};
    firstItem = {quantity: 2, name: 'Cafe Latte'};
    cafetill = jasmine.createSpyObj('cafetill', ['createOrder']);
    cafetill.createOrder.and.callFake(function() {return new Order(tableDetails, cafedetails);});
    janeorder = cafetill.createOrder(tableDetails, cafedetails);
  });

  it("#new", function(){
    expect(janeorder instanceof Order).toBe(true);
  });

  it("#getItems", function(){
    expect(janeorder.getItems()).toEqual([]);
  });

  it("#getTableDetails", function(){
    expect(janeorder.getTableDetails()).toEqual(tableDetails);
  });

  it("#addItem", function() {
    expect(function(){janeorder.addItem(firstItem)}).not.toThrow();
    expect(janeorder.getItems()).toEqual([firstItem]);
  });

  it("#total", function(){
    expect(janeorder.total()).toEqual(cafedetails['prices'][0][firstItem['name']] * firstItem['quantity']);
  });

});
