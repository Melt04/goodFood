/** @format */

export function formatItem(cart) {
  return cart.map(({ item, quantity }) => {
    const { id, title, price } = item
    return { id, title, quantity, price }
  })
}
