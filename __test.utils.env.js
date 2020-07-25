
export const createElement = () => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  return el
}
