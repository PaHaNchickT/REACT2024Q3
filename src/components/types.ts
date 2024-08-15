export type formData = {
  login: string
  age: number
  email: string
  passOrig: string
  sex: string
  imageURL: string
  imageName: string
  country: string
}

export type reduxStore = {
  contrData: { contrData: formData }
  uncontrData: { uncontrData: formData }
  countries: { countries: string[] }
}

export type imageData = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
