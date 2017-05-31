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
    return this._cafeDetails()['prices'][0]['Cafe Latte'] * 2;
  };

  Order.prototype._cafeDetails = function () {
    return this.cafedetails;
  };

  exports.Order = Order;

})(this);
