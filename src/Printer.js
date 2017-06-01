(function(exports){
  'use strict';

  function Printer (cafedetails) {
    this.cafedetails = cafedetails
  }

  Printer.prototype.printBill = function () {
    return this._dateTime() + " " + this._cafeName();
  };

  Printer.prototype._cafeName = function () {
    return this._cafeDetails()['shopName'];
  };

  Printer.prototype._dateTime = function () {
    var date =  new Date();
    var dateOnBill = date.getFullYear() + "." + date.getMonth() + "." + date.getDate();
    var timeOnBill = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return dateOnBill + " " + timeOnBill;
  };

  Printer.prototype._cafeDetails = function () {
    return this.cafedetails;
  };

  exports.Printer = Printer;
})(this);
