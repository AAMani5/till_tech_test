describe("Feature Tests", function(){
  'use strict';

  var cafetill, printer, janeorder, orderItem, totalBeforeTax, totalAfterTax, taxpercent, tableDetails, date, dateTime, header, footer, tableDetailsOnBill;

  beforeEach(function(){
    printer = new Printer(cafedetails);
    cafetill = new CafeTill(cafedetails, Order, printer);
    tableDetails = {table:1, pplcount:2, pplnames:['Jane', 'John']};
    orderItem = {quantity: 2, name: 'Cafe Latte'};
    taxpercent = 8.64;
    totalBeforeTax = (cafedetails['prices'][0][orderItem['name']] * orderItem['quantity']);
    totalAfterTax = Math.round(108.64 * totalBeforeTax)/100;
    date = new Date;
    dateTime = date.getFullYear() + "." + date.getMonth() + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    header = dateTime + "\n" + cafedetails['shopName'] + "\n" + cafedetails['address'] + "\n" + cafedetails['phone'];
    tableDetailsOnBill = `Table: ${tableDetails['table']} / [${tableDetails['pplcount']}]\n${tableDetails['pplnames'].join(",")}`
    footer = "Total\t£9.5\nTax\t£0.82\nTo Pay\t£10.32\nThank You"
  });

  it("can take order and print bill", function(){
    janeorder = cafetill.createOrder(tableDetails);
    expect(janeorder instanceof Order).toBe(true);
    expect(function(){janeorder.addItem(orderItem)}).not.toThrow();
    expect(janeorder.totalBeforeTax()).toEqual(totalBeforeTax);
    expect(janeorder.totalAfterTax()).toEqual(totalAfterTax);
    expect(cafetill.printBill()).toEqual(header + "\n" + tableDetailsOnBill + "\n" + footer);
  });

});
