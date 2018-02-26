import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  let arr: any[];

  beforeEach(() => {
    pipe = new OrderByPipe();
    arr = [
      {a: 122, b: 1, c: "lorem"},
      {a: 12, b: 31, c: "ipsum"}
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return array sorted by providing key', () => {
    expect(pipe.transform(arr, "a", false)).toEqual([
      {a: 122, b: 1, c: "lorem"},
      {a: 12, b: 31, c: "ipsum"}
    ]);

    expect(pipe.transform(arr, "c", true)).toEqual([
      {a: 12, b: 31, c: "ipsum"},
      {a: 122, b: 1, c: "lorem"}
    ]);
  });
});
