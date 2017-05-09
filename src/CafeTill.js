(function(exports){
  'use strict';

  function CafeTill(cafedetails, order_class){
    this.cafedetails = cafedetails;
    this.order_class = order_class;
  }

  CafeTill.prototype.createOrder = function (tabledetails) {
    return new this.order_class(tabledetails);
  };

  exports.CafeTill = CafeTill;

})(this);
