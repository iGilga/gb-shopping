import CartList from '@/services/cartList';

describe('Testing service - cartList', () => {
  it('get amount from cart list', () => {
    const list = new CartList();
    list.addItem({ id: 1, title: 'Socks', price: 50 });
    const amount = list.getAmount();

    expect(amount).toBe(50);
  });
});
