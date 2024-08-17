import { SetStateAction, useEffect, useState } from 'react'
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
  const [imageData, setURL] = useState('')

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
      const reader = new FileReader()

      reader.readAsDataURL((watch('image') as unknown as imageData[])[0] as unknown as Blob)
      reader.onloadend = function () {
        setURL(reader.result as SetStateAction<string>)
      }
    }
  }, [(watch('image') as unknown as imageData[])[0]])

  return (
    <>
      <header>
        <Link to="/">Main Page</Link>
      </header>

      <main>
        <h1>Controlled Form</h1>
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
          <div className={`form__default ${!errors.login && 'div-empty'}`}>
            <label htmlFor="login">Name:</label>
            <input type="text" id="login" {...register('login')} />
            <p className={`${!errors.login && 'empty'}`}>{errors.login?.message}</p>
          </div>

          <div className={`form__default ${!errors.age && 'div-empty'}`}>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" {...register('age')} />
            <p className={`${!errors.age && 'empty'}`}>{errors.age?.message}</p>
          </div>

          <div className={`form__default ${!errors.email && 'div-empty'}`}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register('email')} />
            <p className={`${!errors.email && 'empty'}`}>{errors.email?.message}</p>
          </div>

          <div className={`form__password ${!errors.passOrig && 'div-empty'}`}>
            <label htmlFor="passOrig">Password:</label>
            <input type="password" id="passOrig" {...register('passOrig')} autoComplete="false" />
            <div className="reliability_cont">
              <div className={`reliability_meter ${passwordReliabilityChecker()}`}></div>
            </div>
            <p className={`${!errors.passOrig && 'empty'}`}>{errors.passOrig?.message}</p>
          </div>

          <div className={`form__default ${!errors.passConf && 'div-empty'}`}>
            <label htmlFor="passConf">Confirm password:</label>
            <input type="password" id="passConf" {...register('passConf')} autoComplete="false" />
            <p className={`${!errors.passConf && 'empty'}`}>{errors.passConf?.message}</p>
          </div>

          <div className={`form__default ${!errors.sex && 'div-empty'}`}>
            <label htmlFor="sex">Gender:</label>
            <select id="sex" {...register('sex')}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p className={`${!errors.sex && 'empty'}`}>{errors.sex?.message}</p>
          </div>

          <div className={`form__default ${!errors.confirm && 'div-empty'}`}>
            <label htmlFor="confirm">Accept Terms and Conditions agreement:</label>
            <input type="checkbox" id="confirm" {...register('confirm')} />
            <p className={`${!errors.confirm && 'empty'}`}>{errors.confirm?.message}</p>
          </div>

          <div className={`form__image ${!errors.image && 'div-empty'}`}>
            <label htmlFor="image">Upload Image:</label>
            <input type="file" id="image" {...register('image')} />
            <p className={`${!errors.image && 'empty'}`}>{errors.image?.message}</p>
          </div>

          <div className={`form__default ${!errors.country && 'div-empty'}`}>
            <label htmlFor="country">Country:</label>
            <select id="country" {...register('country')}>
              <CountryOpts />
            </select>
            <p className={`${!errors.country && 'empty'}`}>{errors.country?.message}</p>
          </div>

          <button type="submit" disabled={Boolean(Object.keys(errors).length)}>
            Submit
          </button>
        </form>
      </main>
    </>
  )
}
