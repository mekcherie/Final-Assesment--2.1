const index = require('../index.js')

test('formatNumber 1', () => {
  expect(index.formatNumber('4155448375')).toBe(('(415) 544-8375'))
})

test('formatNumber 2', () => {
  expect(index.formatNumber('1234567890')).toBe(('(123) 456-7890'))
})

test('formatNumber 3', () => {
  expect(index.formatNumber('')).toBe(('No phone number on file'))
})
