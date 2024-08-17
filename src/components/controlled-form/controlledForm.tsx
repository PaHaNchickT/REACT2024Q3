import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
import { useDispatch } from 'react-redux'
import { setContrData } from '../../services/contrSlice'
import { useForm } from 'react-hook-form'
import { FORM_DATA_DEFAULT } from '../constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { imageData } from '../types'
import { schema } from '../../services/yupSchema'
// import { TEXT_CONTENT } from '../constants'

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

  useEffect(() => {
    if ((watch('image') as unknown as imageData[])[0]) {
      console.log('load started')

      const reader = new FileReader()

      reader.readAsDataURL((watch('image') as unknown as imageData[])[0] as unknown as Blob)
      reader.onloadend = function () {
        console.log('load ended')

        dispatch(
          setContrData({
            imageURL: reader.result,
          })
        )
      }
    }
  }, [(watch('image') as unknown as imageData[])[0]])

  return (
    <>
      <p>Controlled</p>
      <Link to="/">Main Page</Link>

      <form
        onSubmit={handleSubmit((data) => {
          const tempObj = {} as { [key: string]: string }
          for (const key in data) {
            if (key !== 'image') tempObj[key] = (data as unknown as { [key: string]: string })[key]
          }

          dispatch(setContrData(tempObj))
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

        <button type="submit" disabled={Boolean(Object.keys(errors).length)}>
          Submit
        </button>
      </form>
    </>
  )
}
