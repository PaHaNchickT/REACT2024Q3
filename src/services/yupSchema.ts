import * as yup from 'yup'
import { imageData } from '../components/types'

export const schema = yup.object().shape({
  login: yup
    .string()
    .matches(/^[A-ZА-ЯЁ]{1}[a-zа-яёA-ZА-ЯЁ]+$/, 'First letter capital')
    .required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email().required(),
  passOrig: yup
    .string()
    .required()
    .matches(
      /^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\W).{6,}$/,
      '1 number, 1 uppercased letter, 1 lowercased letter, 1 special character, 6 chars min'
    ),
  passConf: yup.string().oneOf([yup.ref('passOrig')], 'Passwords must match'),
  sex: yup.string().required(),
  confirm: yup.boolean().oneOf([true], 'Click ffs'),
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
  country: yup.string().required(),
})
