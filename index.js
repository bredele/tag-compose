
module.exports = (first, second, index = 0) => {
  const element = first[index]
  return [element + second.shift(), ...second]
}
