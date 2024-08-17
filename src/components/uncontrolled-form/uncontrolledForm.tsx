import { ChangeEvent, FormEvent, SetStateAction, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
import { setUncontrData } from '../../services/uncontrSlice'
import { useDispatch } from 'react-redux'
import { formErrors } from '../types'
import { schema } from '../../services/yupSchema'
// import { TEXT_CONTENT } from '../constants'

export function UncontrolledForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const [errors, setErrors] = useState({} as formErrors)
  const [rel, setRel] = useState('low')

  const passwordReliabilityChecker = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement

    if (element.value.length <= 3) {
      setRel('low')
    } else if (element.value.length >= 6) {
      setRel('high')
    } else {
      setRel('med')
    }
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    let errors = {}

    try {
      schema.validateSync(
        {
          login: form.login.value,
          age: form.age.value,
          email: form.email.value,
          passOrig: form.passOrig.value,
          passConf: form.passConf.value,
          sex: form.sex.value,
          confirm: form.confirm.checked,
          image: form.image.files,
          country: form.country.value,
        },
        { abortEarly: false }
      )
    } catch (err) {
      const errorsTemp = {} as unknown as { [key: string]: string }
      for (const { path, message } of (err as { inner: { [Symbol.iterator](): Iterator<{ [key: string]: string }> } })
        .inner) {
        errorsTemp[path] = message
      }
      errors = errorsTemp
    }
    setErrors(errors as SetStateAction<formErrors>)

    if (!Object.keys(errors).length) {
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
    }
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
          <p>{errors.login}</p>
        </label>
        <label>
          Age:
          <input type="number" name="age" defaultValue={0} ref={inputRef} />
          <p>{errors.age}</p>
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={inputRef} />
          <p>{errors.email}</p>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="passOrig"
            ref={inputRef}
            autoComplete="false"
            onChange={(event) => passwordReliabilityChecker(event)}
          />
          <div className="reliability_cont">
            <div className="reliability_meter">{rel}</div>
          </div>
          <p>{errors.passOrig}</p>
        </label>
        <label>
          Confirm password:
          <input type="password" name="passConf" ref={inputRef} autoComplete="false" />
          <p>{errors.passConf}</p>
        </label>
        <label>
          Gender:
          <select name="sex" defaultValue="" ref={inputRef}>
            <option value="" disabled hidden></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p>{errors.sex}</p>
        </label>
        <label>
          Accept Terms and Conditions agreement:
          <input type="checkbox" name="confirm" ref={inputRef} />
          <p>{errors.confirm}</p>
        </label>
        <label>
          Upload Image:
          <input type="file" name="image" ref={inputRef} onChange={(event) => encodeImageFileAsURL(event)} />
          <p>{errors.image}</p>
        </label>
        <label>
          Country:
          <select name="country" defaultValue="" ref={inputRef}>
            <option value="" disabled hidden></option>
            <CountryOpts />
          </select>
          <p>{errors.country}</p>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
