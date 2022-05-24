export const truncateString = (result, count = 20) => {
  if (result.length > count) {
    return result.substring(0, count) + '...'
  } else {
    return result
  }
}
