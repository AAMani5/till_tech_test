describe("Order", function(){
  'use strict';
  var cafetill, janeorder, firstItem, secondItem, tableDetails;

  beforeEach(function(){
    tableDetails = {table:1, pplcount:2, pplnames:['Jane', 'John']};
    firstItem = {quantity: 2, name: 'Cafe Latte'};
    secondItem = {quantity: 2, name: 'Flat White'};
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
    janeorder.addItem(firstItem);
    janeorder.addItem(secondItem);
    var total = (cafedetails['prices'][0][firstItem['name']] * firstItem['quantity']) + (cafedetails['prices'][0][secondItem['name']] * secondItem['quantity'])
    expect(janeorder.total()).toEqual(total);
  });

});
