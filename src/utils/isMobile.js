export function isMobileDevice() {
  const userAgent = navigator.userAgent.toLowerCase()
  const touchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  const mobileRegex = /android|iphone|ipad|ipod|windows phone|blackberry|mobile/

  return mobileRegex.test(userAgent) || touchCapable || window.innerWidth < 1024
}
