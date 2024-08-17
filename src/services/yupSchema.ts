import * as yup from 'yup'
import { imageData } from '../components/types'
import { TEXT_CONTENT } from '../components/constants'

export const schema = yup.object().shape({
  login: yup
    .string()
    .matches(/^[A-ZА-ЯЁ]{1}[a-zа-яёA-ZА-ЯЁ]+$/, TEXT_CONTENT.errorsText.login)
    .required(TEXT_CONTENT.errorsText.required),
  age: yup.number().required(TEXT_CONTENT.errorsText.required).positive(TEXT_CONTENT.errorsText.age),
  email: yup.string().email(TEXT_CONTENT.errorsText.email).required(TEXT_CONTENT.errorsText.required),
  passOrig: yup
    .string()
    .required(TEXT_CONTENT.errorsText.required)
    .matches(/^(?=.*\d)(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\W).{6,}$/, TEXT_CONTENT.errorsText.passOrig),
  passConf: yup
    .string()
    .required(TEXT_CONTENT.errorsText.required)
    .oneOf([yup.ref('passOrig')], TEXT_CONTENT.errorsText.passConf),
  sex: yup.string().required(TEXT_CONTENT.errorsText.required),
  confirm: yup.boolean().oneOf([true], TEXT_CONTENT.errorsText.confirm),
  image: yup.mixed().test('fileSize and fileType', TEXT_CONTENT.errorsText.image, (value) => {
    return (
      (value as imageData[])[0] &&
      (value as imageData[])[0].size >= 0 &&
      ((value as imageData[])[0].type === 'image/jpeg' || (value as imageData[])[0].type === 'image/png')
    )
  }),
  country: yup.string().required(TEXT_CONTENT.errorsText.required),
})
