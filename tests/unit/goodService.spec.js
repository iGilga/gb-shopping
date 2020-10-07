import GoodService from '@/services/goodService';

describe('goodService', () => {
  const expectData = [
    {
      id_product: 123,
      product_name: 'Ноутбук',
      price: 45600,
    },
    {
      id_product: 456,
      product_name: 'Мышка',
      price: 1000,
    },
  ];
  it('fetching goods', async () => {
    const goods = GoodService.fetchGoods();
    await goods.then((response) => {
      expect(response.data).toStrictEqual(expectData);
    });
  });
});
