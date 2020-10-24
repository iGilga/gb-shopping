import axios from 'axios';

class GoodService {
  constructor() {
    this.api = axios;
    // this.baseUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
    this.baseUrl = 'http://localhost:3000';
  }

  fetchGoods() {
    const promise = this.api.get(`${this.baseUrl}/catalogData`);
    return promise;
  }
}

export default new GoodService();
