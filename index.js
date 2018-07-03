
module.exports = (first, second, index = 0) => {
  const element = first[index]
  const last = second.pop()
  first.splice(index + 1, 1, (first[index + 1] || '') + last)
  second[0] = element + second[0]
  first.splice(index, 1, ...second)
  return first
}
