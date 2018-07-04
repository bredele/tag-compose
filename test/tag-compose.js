/**
 * Dependencie(s)
 */

const test = require('tape')
const compose = require('..')

test('compose tagged templates where first finish with empty string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', ''], [' world', '']),
    ['hello world', '']
  )
})

test('compose tagged templates fin where first finish with string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', '!'], [' world', '']),
    ['hello world', '!']
  )
})

test('compose tagged templates at given index where first finish with string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', ''], ['world', ''], 1),
    ['hello', 'world', '']
  )
})

test('compose tagged templates at given index where first finish with string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', 'everybody in the ', '!'], ['world', ''], 1),
    ['hello', 'everybody in the world', '!']
  )
})

test('compose tagged templates at given index where first finish with empty string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', 'everybody in the ', ''], ['world', '!'], 1),
    ['hello', 'everybody in the world', '!']
  )
})

test('compose tagged templates at given index where both finish with string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', 'everybody in the ', 'and the universe'], ['world', '!'], 1),
    ['hello', 'everybody in the world', 'and the universe!']
  )
})

// test('compose append tagged templates', assert => {
//   assert.plan(1)
//   assert.deepEqual(
//     compose(['hello', 'everybody in the '], ['world', '!'], 2),
//     ['hello', 'everybody in the ', 'world', '!']
//   )
// })
