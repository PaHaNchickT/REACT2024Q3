import { ChangeEvent, FormEvent, SetStateAction, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
import { setUncontrData } from '../../services/uncontrSlice'
import { useDispatch, useSelector } from 'react-redux'
import { formErrors, reduxStore } from '../types'
import { schema } from '../../services/yupSchema'
import { addState } from '../../services/stateSlice'
import { setURL } from '../../services/imageSlice'
// import { TEXT_CONTENT } from '../constants'

export function UncontrolledForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  const imageURL = useSelector((state: reduxStore) => state.image.URL)
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
          imageURL: imageURL,
          country: form.country.value,
        })
      )

      dispatch(addState('uncontrolled'))
      navigate('/')
    }
  }

  function encodeImageFileAsURL(event: ChangeEvent) {
    const element = event.target as HTMLInputElement
    const reader = new FileReader()

    reader.readAsDataURL(element.files![0])
    reader.onloadend = function () {
      dispatch(setURL(reader.result))
    }
  }

  return (
    <>
      <header>
        <Link to="/">Main Page</Link>
      </header>

      <main>
        <h1>Uncontrolled Form</h1>

        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={`form__default ${!errors.login && 'div-empty'}`}>
            <label htmlFor="login">Name:</label>
            <input type="text" name="login" id="login" ref={inputRef} />
            <p className={`${!errors.login && 'empty'}`}>{errors.login}</p>
          </div>

          <div className={`form__default ${!errors.age && 'div-empty'}`}>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" defaultValue={0} ref={inputRef} />
            <p className={`${!errors.age && 'empty'}`}>{errors.age}</p>
          </div>

          <div className={`form__default ${!errors.email && 'div-empty'}`}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" ref={inputRef} />
            <p className={`${!errors.email && 'empty'}`}>{errors.email}</p>
          </div>

          <div className={`form__password ${!errors.passOrig && 'div-empty'}`}>
            <label htmlFor="passOrig">Password:</label>
            <input
              type="password"
              name="passOrig"
              id="passOrig"
              ref={inputRef}
              autoComplete="false"
              onChange={(event) => passwordReliabilityChecker(event)}
            />
            <div className="reliability_cont">
              <div className={`reliability_meter ${rel}`}></div>
            </div>
            <p className={`${!errors.passOrig && 'empty'}`}>{errors.passOrig}</p>
          </div>

          <div className={`form__default ${!errors.passConf && 'div-empty'}`}>
            <label htmlFor="passConf">Confirm password:</label>
            <input type="password" name="passConf" id="passConf" ref={inputRef} autoComplete="false" />
            <p className={`${!errors.passConf && 'empty'}`}>{errors.passConf}</p>
          </div>

          <div className={`form__default ${!errors.sex && 'div-empty'}`}>
            <label htmlFor="sex">Gender:</label>
            <select name="sex" id="sex" defaultValue="" ref={inputRef}>
              <option value="" disabled hidden></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <p className={`${!errors.sex && 'empty'}`}>{errors.sex}</p>
          </div>

          <div className={`form__default ${!errors.confirm && 'div-empty'}`}>
            <label htmlFor="confirm">Accept Terms and Conditions agreement:</label>
            <input type="checkbox" name="confirm" id="confirm" ref={inputRef} />
            <p className={`${!errors.confirm && 'empty'}`}>{errors.confirm}</p>
          </div>

          <div className={`form__image ${!errors.image && 'div-empty'}`}>
            <label htmlFor="image">Upload Image:</label>
            <input
              type="file"
              name="image"
              id="image"
              ref={inputRef}
              onChange={(event) => encodeImageFileAsURL(event)}
            />
            <p className={`${!errors.image && 'empty'}`}>{errors.image}</p>
          </div>

          <div className={`form__default ${!errors.country && 'div-empty'}`}>
            <label htmlFor="country">Country:</label>
            <select name="country" id="country" defaultValue="" ref={inputRef}>
              <option value="" disabled hidden></option>
              <CountryOpts />
            </select>
            <p className={`${!errors.country && 'empty'}`}>{errors.country}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
