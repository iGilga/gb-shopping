import CartItem from './cartItem';

class CartList {
  constructor() {
    this.list = [];
  }

  getById(id) {
    return this.list.find((item) => (item.id === id));
  }

  getIndexById(id) {
    return this.list.findIndex((item) => (item.id === id));
  }

  getList() {
    return this.list;
  }

  addItem(item, count = 1) {
    const existCart = this.getById(item.id);
    if (existCart) {
      existCart.addCount();
    } else {
      const cart = new CartItem(item, count);
      this.list.push(cart);
    }
  }

  removeItem(id) {
    const existIndex = this.getIndexById(id);
    if (existIndex > -1) {
      this.list.splice(existIndex, 1);
    }
  }

  getAmount() {
    return this.list.reduce((p, c) => p + c.getAmount(), 0);
  }
}

export default CartList;
