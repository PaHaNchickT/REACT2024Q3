import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
import { useDispatch } from 'react-redux'
import { setContrData } from '../../services/contrSlice'
import { useForm } from 'react-hook-form'
import { FORM_DATA_DEFAULT } from '../constants'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { imageData } from '../types'
// import { TEXT_CONTENT } from '../constants'

const schema = yup.object().shape({
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

export function ControlledForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: FORM_DATA_DEFAULT,
    resolver: yupResolver(schema),
  })

  // console.log(errors)

  useEffect(() => {
    if ((watch('image') as imageData[])[0]) {
      console.log('load started')

      const reader = new FileReader()

      reader.readAsDataURL((watch('image') as imageData[])[0] as unknown as Blob)
      reader.onloadend = function () {
        console.log('load ended')

        dispatch(
          setContrData({
            imageURL: reader.result,
          })
        )
      }
    }
  }, [(watch('image') as imageData[])[0]])

  return (
    <>
      <p>Controlled</p>
      <Link to="/">Main Page</Link>

      <form
        onSubmit={handleSubmit((data) => {
          dispatch(setContrData(data))

          navigate('/')
        })}
      >
        <label>
          Name:
          <input type="text" {...register('login')} />
          <p>{errors.login?.message}</p>
        </label>
        <label>
          Age:
          <input type="number" {...register('age')} />
          <p>{errors.age?.message}</p>
        </label>
        <label>
          Email:
          <input type="email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </label>
        <label>
          Password:
          <input type="password" {...register('passOrig')} autoComplete="false" />
          <p>{errors.passOrig?.message}</p>
        </label>
        <label>
          Confirm password:
          <input type="password" {...register('passConf')} autoComplete="false" />
          <p>{errors.passConf?.message}</p>
        </label>
        <label>
          Gender:
          <select {...register('sex')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p>{errors.sex?.message}</p>
        </label>
        <label>
          Accept Terms and Conditions agreement:
          <input type="checkbox" {...register('confirm')} />
          <p>{errors.confirm?.message}</p>
        </label>
        <label>
          Upload Image:
          <input type="file" {...register('image')} />
          <p>{errors.image?.message}</p>
        </label>
        <label>
          Country:
          <select {...register('country')}>
            <CountryOpts />
          </select>
          <p>{errors.country?.message}</p>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
