class GoodService {
  constructor() {

  }

  fetchGoods() {
    const data = [
      { id: 1, title: 'Shirt', price: 150 },
      { id: 2, title: 'Socks', price: 50 },
      { id: 3, title: 'Jacket', price: 350 },
      { id: 4, title: 'Shoes', price: 250 },
      { id: 5, title: 'Shoes', price: 300 },
      { id: 6, title: 'Shoes', price: 75 },
      { id: 7, title: 'Shoes', price: 275 },
      { id: 8, title: 'Shoes', price: 400 },
    ];
    const promise = Promise.resolve(data);
    return promise;
  }
}

export default new GoodService();
