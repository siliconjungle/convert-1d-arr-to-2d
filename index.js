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
