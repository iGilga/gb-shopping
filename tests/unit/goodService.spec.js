import GoodService from '@/services/goodService';

describe('goodService', () => {
  const expectData = [
    { id: 1, title: 'Shirt', price: 150 },
    { id: 2, title: 'Socks', price: 50 },
    { id: 3, title: 'Jacket', price: 350 },
    { id: 4, title: 'Shoes', price: 250 },
    { id: 5, title: 'Shoes', price: 300 },
    { id: 6, title: 'Shoes', price: 75 },
    { id: 7, title: 'Shoes', price: 275 },
    { id: 8, title: 'Shoes', price: 400 },
  ];
  it('fetching goods', () => {
    const goods = GoodService.fetchGoods();
    goods.then((data) => {
      expect(data).toStrictEqual(expectData);
    });
  });
});
