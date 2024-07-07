export default class LocalStorage {
  getValue() {
    return localStorage.getItem('paul-saved-value') || ''
  }

  saveValue(value: string) {
    localStorage.setItem('paul-saved-value', value)
  }
}
