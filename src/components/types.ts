export type imageData = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export type formData = {
  login: string
  age: number
  email: string
  passOrig: string
  sex: string
  image: imageData[]
  imageURL: string
  imageName: string
  country: string
}

export type reduxStore = {
  contrData: { contrData: formData }
  uncontrData: { uncontrData: formData }
  countries: { countries: string[] }
}
