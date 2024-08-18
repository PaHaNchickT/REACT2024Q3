export const TEXT_CONTENT = {
  btnErrorHome: 'Home',
  errorTitle: 'Oops',
  errorText: 'Something went wrong...',
  errorPageTitle: '404',
  errorPageText: 'Not found...',
  mainTitle: 'Main Page',
  uncontrTitle: 'Uncontrolled',
  uncontrHeading: 'Uncontrolled Form',
  contrTitle: 'Controlled',
  contrHeading: 'Controlled Form',
  tablePH: 'Fill out the form to see your data...',
  fields: {
    login: 'Name: ',
    age: 'Age: ',
    email: 'Email: ',
    passGlobal: 'Password: ',
    sex: 'Gender: ',
    image: 'Image: ',
    country: 'Country: ',
  },
  errorsText: {
    required: 'This field is required',
    login: 'The first letter must be capitalized',
    age: 'Age must be greater than zero',
    email: 'Enter valid e-mail',
    passOrig:
      'The password must be at least 6 characters long and contain: 1 number, 1 uppercased letter, 1 lowercased letter and 1 special character',
    passConf: 'Passwords must match',
    confirm: 'You must accept Terms and Conditions agreement',
    image: 'Upload an image with the actual size and one of the allowed extensions: .jpeg, .jpg, and .png',
  },
}

export const FORM_DATA_EMPTY = {
  login: '',
  age: 0,
  email: '',
  passOrig: '',
  passConf: '',
  sex: '',
  image: [],
  imageURL: '',
  imageName: '',
  country: '',
  confirm: false,
}

export const FORM_DATA_DEFAULT = {
  login: '',
  age: 0,
  email: '',
  passOrig: '',
  passConf: '',
  sex: '',
  confirm: false,
  image: '',
  country: '',
}
