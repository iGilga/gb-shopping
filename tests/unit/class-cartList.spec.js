import CartList from '@/services/cartList';
import CartItem from '@/services/cartItem';

describe('Testing class - cartList', () => {
  const list = new CartList();
  const item = { id: 1, title: 'Socks', price: 50 };
  list.addItem(item);

  it('get amount from cart list', () => {
    const amount = list.getAmount();

    expect(amount).toBe(50);
  });

  it('add new item', () => {
    expect(list.getList()).toStrictEqual([new CartItem(item, 1)]);
    describe('add exist item', () => {
      list.addItem(item);
      expect(list.getList()).toStrictEqual([new CartItem(item, 2)]);
    });
  });

  it('remove item', () => {
    list.removeItem(1);
    expect(list.getList()).toStrictEqual([]);
  });
});
