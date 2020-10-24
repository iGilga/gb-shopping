import axios from 'axios';

class CartService {
  constructor() {
    this.api = axios;
    // this.baseUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
    this.baseUrl = 'http://localhost:3000';
  }

  fetchCart() {
    const promise = this.api.get(`${this.baseUrl}/cart`);
    return promise;
  }

  addCart(cart) {
    const promise = this.api.post(`${this.baseUrl}/addToCart`, cart);
    return promise;
  }
}

export default new CartService();
