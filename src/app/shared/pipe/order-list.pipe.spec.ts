import { OrderListPipe } from './order-list.pipe';

describe('OrderListPipe', () => {
  let pipe: OrderListPipe;

  beforeEach(() => {
    pipe = new OrderListPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
