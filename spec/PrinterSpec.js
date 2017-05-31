describe("Printer", function(){
  var printer;

  beforeEach(function(){
    printer = new Printer(cafedetails);
  });

  it("#new", function () {
    expect(printer instanceof Printer).toBe(true);
  })
});
