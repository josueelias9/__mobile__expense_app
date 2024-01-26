function limitString(str, limit) {
  if (str.length > limit) {
    return str.substring(0, limit)
  } else {
    return str
  }
}

function camelCaseToWords(str) {
  // Insert a space before all caps and trim the resulting string
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
}

export { limitString, camelCaseToWords }
