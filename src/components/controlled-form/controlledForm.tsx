import { ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
import { useDispatch } from 'react-redux'
import { setContrData } from '../../services/contrSlice'
import { useForm } from 'react-hook-form'
import { FORM_DATA_DEFAULT } from '../constants'
// import { TEXT_CONTENT } from '../constants'

export function ControlledForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: FORM_DATA_DEFAULT,
  })

  function encodeImageFileAsURL(event: ChangeEvent) {
    console.log('load started')

    const element = event.target as HTMLInputElement
    const reader = new FileReader()

    reader.readAsDataURL(element.files![0])
    reader.onloadend = function () {
      console.log('load ended')

      dispatch(
        setContrData({
          imageURL: reader.result,
        })
      )
    }
  }

  return (
    <>
      <p>Uncontrolled</p>
      <Link to="/">Main Page</Link>

      <form
        onSubmit={handleSubmit((data) => {
          dispatch(setContrData(data))

          navigate('/')
        })}
      >
        <label>
          Name:
          <input type="text" {...register('login', { required: 'This is required' })} />
          <p>{errors.login?.message}</p>
        </label>
        <label>
          Age:
          <input
            type="number"
            {...register('age', { required: 'This is required', minLength: { value: 2, message: 'min 2' } })}
          />
        </label>
        <label>
          Email:
          <input type="email" {...register('email')} />
        </label>
        <label>
          Password:
          <input type="password" {...register('passOrig')} autoComplete="false" />
        </label>
        <label>
          Confirm password:
          <input type="password" {...register('passConf')} autoComplete="false" />
        </label>
        <label>
          Gender:
          <select {...register('sex')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Accept Terms and Conditions agreement:
          <input type="checkbox" {...register('confirm')} />
        </label>
        <label>
          Upload Image:
          <input type="file" {...register('image')} onChange={(event) => encodeImageFileAsURL(event)} />
        </label>
        <label>
          Country:
          <select {...register('country')}>
            <CountryOpts />
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
