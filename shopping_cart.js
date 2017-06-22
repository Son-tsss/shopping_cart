function ShoppingCart() {
    this.items = {};

    this.addItem = function (item) {
        var id = item.id;
        if (!this.items[id]) {
            this.items[id] = item;
            this.items[id].count = 1;
            this.items[id].finalPrice = item.price;
        } else {
            this.incrementItem(id)
        }
    };

    this.deleteItem = function (id) {
        delete this.items[id]
    };

    this.incrementItem = function (id) {
        if (this.items[id])
            this.items[id].count++
    };

    this.decrementItem = function (id) {
        if (this.items[id] && this.items[id].count > 0)
            this.items[id].count--;
    };

    this.applyDiscountToItem = function (discount, id) {
        if (this.items[id])
            this.items[id].finalPrice *= discount;
    };

    this.applyDiscountToCart = function (discount) {
        for (var id in this.items){
            if(this.items.hasOwnProperty(id))
                this.applyDiscountToItem(discount, id);
        }
    };

    this.getBill = function () {
        var bill = {
            items: this.items,
            price: 0,
            finalPrice: 0
        };

        for(var id in this.items){
            if(this.items.hasOwnProperty(id)){
                var price = this.items[id].price;
                var finalPrice = this.items[id].finalPrice;
                var count = this.items[id].count;

                bill.price += price * count;
                bill.finalPrice += finalPrice * count;
            }
        }

        return bill
    }
}

var sc1 = new ShoppingCart;
