import { validNextPath } from "./index";


describe('valid next path', () => {

  test('next path should be false', () => {
    const actual = validNextPath(4, 5);
    expect(actual).toEqual(false);
  });
});
