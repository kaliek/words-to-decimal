import {wordsToDecimal} from '../main';
const { it } = global;

it('one quarter', () => {
  expect(wordsToDecimal('one quarter')).toEqual(0.25);
});
it('two thirds', () => {
  expect(wordsToDecimal('two thirds')).toBeCloseTo(0.666, 2);
});
it('half', () => {
  expect(wordsToDecimal('half')).toEqual(0.5);
});
it('one and half', () => {
  expect(wordsToDecimal('one and half')).toEqual(1.5);
});
it('two hundred', () => {
  expect(wordsToDecimal('two hundred')).toEqual(200);
});
it('twenty two and half', () => {
  expect(wordsToDecimal('twenty two and half')).toEqual(22.5);
});