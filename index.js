// 1D to 2D
const chunk = (arr, size) => {
  let idx = 0
  const result = []

  while (idx < arr.length) {
    if (idx % size === 0) result.push([])
    result[result.length - 1].push(arr[idx++])
  }

  return result
}

// 2D to 1D
// arr.flat()

// Convert index to position
const getPositionFromIndex = (index, width) => ({
  x: index / width,
  y: index % width,
})

// Convert position to index
const convertPositionToIndex = (position, width) =>
  position.x + width * position.y
