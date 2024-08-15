export type formData = {
  login: string
  age: number
  email: string
  passOrig: string
  passConf: string
  sex: string
  image: string
  country: string
}

export type reduxStore = {
  contrData: {
    contrData: formData
  }
  uncontrData: {
    uncontrData: formData
  }
  countries: {
    countries: string[]
  }
}
