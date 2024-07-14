export function LocalStorage() {
  const getValue = () => {
    return localStorage.getItem('paul-saved-value') || ''
  }

  const saveValue = (value: string) => {
    localStorage.setItem('paul-saved-value', value)
  }

  return Object.freeze({
    getValue,
    saveValue,
  })
}
