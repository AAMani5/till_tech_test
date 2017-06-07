describe("Printer", function(){
  var printer, date, dateTime, header, footer, order, item1, item2, tableDetails;

  beforeEach(function(){
    item1 = {quantity: 2, name: 'Cafe Latte'};
    item2 = {quantity: 2, name: 'Flat White'}
    tableDetails = {table:1, pplcount:2, pplnames:['Jane', 'John']};
    date = new Date;
    dateTime = date.getFullYear() + "." + date.getMonth() + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    header = dateTime + "\n" + cafedetails['shopName'] + "\n" + cafedetails['address'] + "\n" + cafedetails['phone'];
    footer = "Total\t£9.5\nTax\t£0.82\nTo Pay\t£10.32\nThank You"
    order = jasmine.createSpyObj('order', ['totalBeforeTax', 'totalAfterTax', 'taxAmount', 'getTableDetails', 'getItems']);
    order.getItems.and.callFake(function() {return [item1, item2];});
    order.getTableDetails.and.callFake(function() {return tableDetails;});
    order.totalBeforeTax.and.callFake(function() {return 9.5;});
    order.totalAfterTax.and.callFake(function() {return 10.32;});
    order.taxAmount.and.callFake(function() {return 0.82;});
    printer = new Printer(cafedetails);
  });

  it("#new", function () {
    expect(printer instanceof Printer).toBe(true);
  })

  it("#printBill - header", function () {
    expect(printer.printBill(order)).toEqual(header + "\n" + footer);
  })

});
