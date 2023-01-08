module.exports = function reverse (n) {
  return ('' + n).split('').filter(num => num !== '-').reverse().join('')
}
