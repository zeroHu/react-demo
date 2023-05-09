const isMobile = () => {
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    return true
  }
  return false
}

const debounce = (func, wait, immediate) => {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func.apply(this, args)
    }, wait)
    if (immediate && !timeout) func.apply(this, [...args])
  }
}

export { isMobile, debounce }
