/**
 * Dependencie(s)
 */

const test = require('tape')
const compose = require('..')


test('should compose two tagged template literals without given index', assert => {
  assert.plan(1)
  assert.deepEqual(
    compose(['hello', ''], ['world', '']),
    ['hello world', '']
  )
})
