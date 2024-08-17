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
import { addState } from '../../services/stateSlice'
// import { TEXT_CONTENT } from '../constants'

export function ControlledForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let imageData: ArrayBuffer | string = ''

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

  const passwordReliabilityChecker = () => {
    let output = 'med'

    if (watch('passOrig').length <= 3) {
      output = 'low'
    } else if (watch('passOrig').length >= 6) {
      output = 'high'
    }

    return output
  }

  useEffect(() => {
    if ((watch('image') as unknown as imageData[])[0]) {
      console.log('load started')

      const reader = new FileReader()

      reader.readAsDataURL((watch('image') as unknown as imageData[])[0] as unknown as Blob)
      reader.onloadend = function () {
        console.log('load ended')

        imageData = reader.result as ArrayBuffer
      }
    }
  }, [(watch('image') as unknown as imageData[])[0]])

  return (
    <>
      <p>Controlled</p>
      <Link to="/">Main Page</Link>

      <form
        onSubmit={handleSubmit((data) => {
          const tempObj = { imageURL: imageData } as { [key: string]: string }
          for (const key in data) {
            if (key !== 'image') tempObj[key] = (data as unknown as { [key: string]: string })[key]
          }

          dispatch(setContrData(tempObj))
          dispatch(addState('controlled'))
          navigate('/')
        })}
      >
        <div>
          <label htmlFor="login">Name:</label>
          <input type="text" id="login" {...register('login')} />
          <p>{errors.login?.message}</p>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="passOrig">Password:</label>
          <input type="password" id="passOrig" {...register('passOrig')} autoComplete="false" />
          <div className="reliability_cont">
            <div className="reliability_meter">{passwordReliabilityChecker()}</div>
          </div>
          <p>{errors.passOrig?.message}</p>
        </div>
        <div>
          <label htmlFor="passConf">Confirm password:</label>
          <input type="password" id="passConf" {...register('passConf')} autoComplete="false" />
          <p>{errors.passConf?.message}</p>
        </div>
        <div>
          <label htmlFor="sex">Gender:</label>
          <select id="sex" {...register('sex')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p>{errors.sex?.message}</p>
        </div>
        <div>
          <label htmlFor="confirm">Accept Terms and Conditions agreement:</label>
          <input type="checkbox" id="confirm" {...register('confirm')} />
          <p>{errors.confirm?.message}</p>
        </div>
        <div>
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" {...register('image')} />
          <p>{errors.image?.message}</p>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <select id="country" {...register('country')}>
            <CountryOpts />
          </select>
          <p>{errors.country?.message}</p>
        </div>

        <button type="submit" disabled={Boolean(Object.keys(errors).length)}>
          Submit
        </button>
      </form>
    </>
  )
}
