(function(exports){
  'use strict';

  function Printer (cafedetails) {
    this.cafedetails = cafedetails
  }

  Printer.prototype.printBill = function () {
    return this._cafeDetails()['shopName']
  };

  Printer.prototype._cafeDetails = function () {
    return this.cafedetails;
  };

  exports.Printer = Printer;
})(this);
