(function(exports){
  'use strict';

  function CafeTill(cafedetails, order_class, printer){
    this.cafedetails = cafedetails;
    this.order_class = order_class;
    this.printer = printer;
  }

  CafeTill.prototype.createOrder = function (tabledetails) {
    this.tableDetails = tabledetails;
    this.order = new this.order_class(this._tableDetails(), this._cafeDetails());
    return this._order();
  };

  CafeTill.prototype.printBill = function () {
    return this._printer().printBill(this._order(), this._tableDetails());
  };

  CafeTill.prototype._order = function () {
    return this.order;
  };

  CafeTill.prototype._tableDetails = function () {
    return this.tableDetails;
  };

  CafeTill.prototype._cafeDetails = function () {
    return this.cafedetails;
  };

  CafeTill.prototype._printer = function () {
    return this.printer;
  };

  exports.CafeTill = CafeTill;

})(this);
