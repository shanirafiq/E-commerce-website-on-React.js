import React from 'react'

const FormatPrice = ({price}) => {
  return  Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price/100)
}

export default FormatPrice
