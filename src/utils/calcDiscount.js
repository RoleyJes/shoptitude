export function calcDiscount(price, percent = 40) {
  const discountAmt = (percent / 100) * price
  return discountAmt.toFixed(2)
}
