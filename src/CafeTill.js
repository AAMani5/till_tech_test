(function(exports){
  'use strict';

  function CafeTill(cafedetails, order_class, printer){
    this.cafedetails = cafedetails;
    this.order_class = order_class;
    this.printer = printer;
  }

  CafeTill.prototype.createOrder = function (tabledetails) {
    return new this.order_class(tabledetails, this._cafeDetails());
  };

  CafeTill.prototype.printBill = function () {
    return this._printer().printBill();
  };

  CafeTill.prototype._cafeDetails = function () {
    return this.cafedetails;
  };

  CafeTill.prototype._printer = function () {
    return this.printer;
  };

  exports.CafeTill = CafeTill;

})(this);
