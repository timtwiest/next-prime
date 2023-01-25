import { getReadableTimeString } from '@utils/formatter.util';

describe('formatter util', () => {
  let date: Date;

  beforeEach(() => {
    date = new Date();
  });

  describe('getRelativeTimeString', () => {
    it('should return that the date was now', () => {
      const relative = getReadableTimeString(date);

      expect(relative).toBe('now');
    });

    it('should return that the date was 5 seconds ago', () => {
      date.setSeconds(date.getSeconds() - 5);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('5 seconds ago');
    });

    it('should return that the date was 10 minutes ago', () => {
      date.setMinutes(date.getMinutes() - 10);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('10 minutes ago');
    });

    it('should return that the date was 1 hour ago', () => {
      date.setMinutes(date.getMinutes() - 60);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('1 hour ago');
    });

    it('should return that the date was yesterday', () => {
      date.setHours(date.getHours() - 24);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('yesterday');
    });

    it('should return that the date was 2 days ago', () => {
      date.setHours(date.getHours() - 24 * 2);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('2 days ago');
    });

    it('should return that the date was last week', () => {
      date.setHours(date.getHours() - 24 * 7);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('last week');
    });

    it('should return that the date was 4 weeks ago', () => {
      date.setHours(date.getHours() - 24 * 7 * 4);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('4 weeks ago');
    });

    it('should return that the date was 2 months ago', () => {
      date.setMonth(date.getMonth() - 1);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('2 months ago');
    });

    it('should return that the date was last year', () => {
      date.setFullYear(date.getFullYear() - 1);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('last year');
    });

    it('should return that the date was 11 years ago', () => {
      date.setFullYear(date.getFullYear() - 10);
      const relative = getReadableTimeString(date);

      expect(relative).toBe('11 years ago');
    });
  });
});
