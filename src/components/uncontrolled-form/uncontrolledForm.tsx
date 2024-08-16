import { ChangeEvent, FormEvent, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
import { setUncontrData } from '../../services/uncontrSlice'
import { useDispatch } from 'react-redux'
// import { TEXT_CONTENT } from '../constants'

export function UncontrolledForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    dispatch(
      setUncontrData({
        login: form.login.value,
        age: form.age.value,
        email: form.email.value,
        passOrig: form.passOrig.value,
        sex: form.sex.value,
        imageName: form.image.files[0].name,
        country: form.country.value,
      })
    )

    navigate('/')
    // console.log(form.passConf.value, form.confirm.checked, form.image.files[0])
  }

  function encodeImageFileAsURL(event: ChangeEvent) {
    console.log('load started')

    const element = event.target as HTMLInputElement
    const reader = new FileReader()

    reader.readAsDataURL(element.files![0])
    reader.onloadend = function () {
      console.log('load ended')

      dispatch(
        setUncontrData({
          imageURL: reader.result,
        })
      )
    }
  }

  return (
    <>
      <p>Uncontrolled</p>
      <Link to="/">Main Page</Link>

      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Name:
          <input type="text" name="login" ref={inputRef} />
        </label>
        <label>
          Age:
          <input type="number" name="age" ref={inputRef} />
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={inputRef} />
        </label>
        <label>
          Password:
          <input type="password" name="passOrig" ref={inputRef} autoComplete="false" />
        </label>
        <label>
          Confirm password:
          <input type="password" name="passConf" ref={inputRef} autoComplete="false" />
        </label>
        <label>
          Gender:
          <select name="sex" defaultValue="" ref={inputRef}>
            <option value="" disabled hidden></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Accept Terms and Conditions agreement:
          <input type="checkbox" name="confirm" ref={inputRef} />
        </label>
        <label>
          Upload Image:
          <input type="file" name="image" ref={inputRef} onChange={(event) => encodeImageFileAsURL(event)} />
        </label>
        <label>
          Country:
          <select name="country" defaultValue="" ref={inputRef}>
            <option value="" disabled hidden></option>
            <CountryOpts />
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
