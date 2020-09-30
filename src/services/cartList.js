import CartItem from './cartItem';

class CartList {
  constructor() {
    this.list = [];
  }

  setList(list) {

  }

  addItem(item, count = 1) {
    const cart = new CartItem(item, count);
    this.list.push(cart);
  }

  removeItem(id) {

  }

  getAmount() {
    return this.list.reduce((p, c) => p + c.getAmount(), 0);
  }
}

export default CartList;
