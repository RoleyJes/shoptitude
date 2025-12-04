export function formatCurrency({
  amount,
  currency = 'USD',
  locale = 'en-US',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
} = {}) {
  if (isNaN(amount)) return '0.00'

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount)
}
