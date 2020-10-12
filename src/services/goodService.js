import axios from 'axios';

class GoodService {
  constructor() {
    this.api = axios;
    this.baseUrl = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
  }

  fetchGoods() {
    const promise = this.api.get(`${this.baseUrl}/catalogData.json`);
    return promise;
  }
}

export default new GoodService();
