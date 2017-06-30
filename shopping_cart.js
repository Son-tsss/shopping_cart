function ShoppingCart() {
    var items = {};
    var cartDiscount = 1;

    this.getItems = function () {
        var itemsArray = [];
        for (var id in items) {
            if (items.hasOwnProperty(id))
                itemsArray.push(items[id]);
        }

        return itemsArray
    };

    this.addItem = function (item) {
        var id = item.id;
        if (!items[id]) {
            items[id] = item;
            items[id].count = 1;
            items[id].finalPrice = item.price;
        } else {
            this.incrementItem(id)
        }
    };

    this.deleteItem = function (id) {
        if (items[id])
            delete items[id]
    };

    this.incrementItem = function (id) {
        if (items[id])
            items[id].count++
    };

    this.decrementItem = function (id) {
        if (items[id] && items[id].count > 0)
            items[id].count--;
    };

    this.applyDiscountToItem = function (discount, id) {
        if (items[id])
            items[id].finalPrice *= discount;
    };

    this.applyDiscountToCart = function (discount) {
        cartDiscount = discount;
    };

    this.getBill = function () {
        var items = this.getItems();

        var bill = {
            items: items,
            price: 0,
            finalPrice: 0
        };

        items.forEach(function (item) {
            var price = item.price;
            var finalPrice = item.finalPrice;
            var count = item.count;

            bill.price += price * count;
            bill.finalPrice += finalPrice * cartDiscount * count;
        });

        return bill
    }
}

module.exports = ShoppingCart;
