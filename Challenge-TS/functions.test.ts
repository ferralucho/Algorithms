import simpleIsPalindrome from "./functions";

describe('simpleIsPalindrome', () => {
    test('returns true for palindromic strings', () => {
      expect(simpleIsPalindrome('racecar')).toBe(true);
      expect(simpleIsPalindrome('level')).toBe(true);
      expect(simpleIsPalindrome('madam')).toBe(true);
      expect(simpleIsPalindrome('12321')).toBe(true);
    });

    test('returns false for non palindromic strings', () => {
      expect(simpleIsPalindrome('tree')).toBe(false);
    });
  });