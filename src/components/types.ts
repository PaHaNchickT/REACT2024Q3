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
  passConf?: string
  sex: string
  confirm?: boolean
  imageContr: unknown
  imageUncontr: unknown
  country: string
}

// export type formData = {
//   login: string
//   age: number
//   email: string
//   passOrig: string
//   passConf: string
//   sex: string
//   imageContr?: imageData[]
//   imageUncontr?: imageData[]
//   imageURL: string
//   imageName: string
//   confirm: boolean
//   country: string
// }

export type formErrors = {
  login: string
  age: string
  email: string
  passOrig: string
  passConf: string
  sex: string
  confirm: string
  imageUncontr: string
  country: string
}

export type reduxStore = {
  contrData: { contrData: formData }
  uncontrData: { uncontrData: formData }
  countries: { countries: string[] }
}
