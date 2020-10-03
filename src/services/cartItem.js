class CartItem {
  constructor(good, count) {
    const { id, name, price } = good;
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }

  addCount(count = 1) {
    this.count += count;
  }

  getAmount() {
    return this.price * this.count;
  }
}

export default CartItem;
