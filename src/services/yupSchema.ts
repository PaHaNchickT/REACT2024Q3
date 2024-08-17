import * as yup from 'yup'
import { imageData } from '../components/types'

export const schema = yup.object().shape({
  login: yup
    .string()
    .matches(/^[A-ZА-ЯЁ]{1}[a-zа-яёA-ZА-ЯЁ]+$/, 'The first letter must be capitalized')
    .required('This field is required'),
  age: yup.number().required('This field is required').positive('Age must be greater than zero'),
  email: yup.string().email('Enter valid e-mail').required('This field is required'),
  passOrig: yup
    .string()
    .required('This field is required')
    .matches(
      /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\W).{6,}$/,
      'The password must be at least 6 characters long and contain: 1 number, 1 uppercased letter, 1 lowercased letter and 1 special character'
    ),
  passConf: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('passOrig')], 'Passwords must match'),
  sex: yup.string().required('This field is required'),
  confirm: yup.boolean().oneOf([true], 'You must accept Terms and Conditions agreement'),
  image: yup
    .mixed()
    .test(
      'fileSize and fileType',
      'Upload an image with the actual size and one of the allowed extensions: .jpeg, .jpg, and .png',
      (value) => {
        return (
          (value as imageData[])[0] &&
          (value as imageData[])[0].size >= 0 &&
          ((value as imageData[])[0].type === 'image/jpeg' || (value as imageData[])[0].type === 'image/png')
        )
      }
    ),
  country: yup.string().required('This field is required'),
})
