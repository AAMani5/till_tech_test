(function(exports){
  'use strict';

  function Order(orderDetails){
    this.items = [];
    this.orderDetails = orderDetails;
  }

  Order.prototype.addItem = function (itemdetails) {
    this.getItems().push(itemdetails)
  };

  Order.prototype.getItems = function () {
    return this.items;
  };

  Order.prototype.getOrderDetails = function () {
    return this.orderDetails;
  };

  exports.Order = Order;

})(this);
