// 2D to 1D
const chunk = (arr, size) => {
  let idx = 0
  const result = []

  while (idx < arr.length) {
    if (idx % size === 0) result.push([])
    result[result.length - 1].push(arr[idx++])
  }

  return result
}

// 1D to 2D
// arr.flat()
