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
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/,
      '1 number, 1 uppercased letter, 1 lowercased letter, 1 special character, 6 chars min'
    ),
  passConf: yup.string().oneOf([yup.ref('passOrig')], 'Passwords must match'),
  sex: yup.string().required(),
  confirm: yup.boolean().oneOf([true], 'Click ffs'),
  image: yup
    .mixed()
    .required()
    .test('fileSize', "The file is too small or it's not have been loaded", (value) => {
      return value && (value as imageData[])[0].size >= 0
    })
    .test('type', 'Only the following formats are accepted: .jpeg, .jpg, and .png', (value) => {
      return (
        value && ((value as imageData[])[0].type === 'image/jpeg' || (value as imageData[])[0].type === 'image/png')
      )
    }),
  country: yup.string().required(),
})
