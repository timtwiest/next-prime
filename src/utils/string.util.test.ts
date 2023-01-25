import { capitalize, truncate } from './string.util';

describe('string util', () => {
  describe('capitalize', () => {
    test('should capitalise the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should return an empty string if passed an empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should return the same string if passed a single character', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should return the same string if passed a number', () => {
      expect(capitalize('123')).toBe('123');
    });
  });

  describe('truncate', () => {
    it('should return the same string if it is shorter than the length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should return the same string if it is equal to the length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    test('should return a truncated string with "..." appended if length is less than the string length', () => {
      expect(truncate('hello', 4)).toBe('hell...');
    });
  });
});
