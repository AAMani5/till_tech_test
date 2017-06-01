(function(exports){
  'use strict';

  function Printer (cafedetails) {
    this.cafedetails = cafedetails
  }

  Printer.prototype.printBill = function () {
    return this._headerData();
  };

  Printer.prototype._headerData = function () {
    var firstPart = [this._dateTime(), this._cafeName()]
    var secondPart = this._contactInfo();
    firstPart.push.apply(firstPart, secondPart);
    return firstPart.join("\n")
  };

  Printer.prototype._contactInfo = function () {
    var contact = [this._cafeDetails()['address'], this._cafeDetails()['phone']]
    return contact;
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
