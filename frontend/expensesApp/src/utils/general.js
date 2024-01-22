function limitString(str, limit) {
  if (str.length > limit) {
    return str.substring(0, limit)
  } else {
    return str
  }
}

export { limitString }
