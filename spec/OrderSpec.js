describe("Order", function(){
  'use strict';
  var cafetill, janeorder, firstItem, secondItem, tableDetails, taxpercent;

  beforeEach(function(){
    taxpercent = 8.64;
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

  it("#totalBeforeTax", function(){
    janeorder.addItem(firstItem);
    janeorder.addItem(secondItem);
    var totalBeforeTax = (cafedetails['prices'][0][firstItem['name']] * firstItem['quantity']) + (cafedetails['prices'][0][secondItem['name']] * secondItem['quantity'])
    expect(janeorder.totalBeforeTax()).toEqual(totalBeforeTax);
  });

  it("#totalAfterTax", function(){
    janeorder.addItem(firstItem);
    var totalBeforeTax = cafedetails['prices'][0][firstItem['name']] * firstItem['quantity'];
    var totalAfterTax = Math.round(totalBeforeTax * 108.64)/100;
    expect(janeorder.totalAfterTax()).toEqual(totalAfterTax);
  });

  it("#taxAmount", function(){
    janeorder.addItem(firstItem);
    var totalBeforeTax = cafedetails['prices'][0][firstItem['name']] * firstItem['quantity'];
    var tax = Math.round(taxpercent * totalBeforeTax)/100;
    expect(janeorder.taxAmount()).toEqual(tax);
  });

});
