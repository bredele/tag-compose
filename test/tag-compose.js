/**
 * Dependencie(s)
 */

const test = require('tape')
const compose = require('..')

test('compose tagged templates of same length finishing with empty string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', ''], [' world', '']),
    ['hello world', '']
  )
})

test('compose tagged templates of same length finishing with string', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', '!'], [' world', '']),
    ['hello world', '!']
  )
})

test('compose tagged templates at given index', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', ''], ['world', ''], 1),
    ['hello', 'world', '']
  )
})
