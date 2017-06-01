describe("Printer", function(){
  var printer, date, dateTime;

  beforeEach(function(){
    printer = new Printer(cafedetails);
    date = new Date;
    dateTime = date.getFullYear() + "." + date.getMonth() + "." + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  });

  it("#new", function () {
    expect(printer instanceof Printer).toBe(true);
  })

  it("", function () {
    expect(printer.printBill()).toEqual(dateTime + " " + cafedetails['shopName']);
  })

});
