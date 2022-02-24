module.exports = function towelSort (matrix) {
  if ((matrix === undefined) || (matrix.length === 0)) return []
  let arr = []
  matrix.forEach((element, i) => { 
    if (i%2!=0) {
      arr.push(...element.sort((a,b) => b - a))
    } else {
      arr.push(...element)
    }
  })
  return arr
}

