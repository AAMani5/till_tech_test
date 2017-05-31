(function(exports){
  'use strict';

  function Order(tableDetails, cafedetails){
    this.cafedetails = cafedetails;
    this.items = [];
    this.tableDetails = tableDetails;
  }

  Order.prototype.addItem = function (itemdetails) {
    this.getItems().push(itemdetails)
  };

  Order.prototype.getItems = function () {
    return this.items;
  };

  Order.prototype.getTableDetails = function () {
    return this.tableDetails;
  };

  Order.prototype.total = function () {
    var order = this;
    var total = this.getItems().reduce(function(accumulator, item){
      var itemTotal = order._cafeDetails()['prices'][0][item['name']] * item['quantity'];
      return accumulator + itemTotal;
    }, 0);
    return total;
  };

  Order.prototype._cafeDetails = function () {
    return this.cafedetails;
  };

  exports.Order = Order;

})(this);
