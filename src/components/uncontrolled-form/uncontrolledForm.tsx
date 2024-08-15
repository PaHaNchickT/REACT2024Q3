import { FormEvent, useRef } from 'react'
import { Link } from 'react-router-dom'
import { CountryOpts } from '../country-options/countryOpts'
// import { TEXT_CONTENT } from '../constants'

export function UncontrolledForm() {
  const inputRef = useRef(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    console.log(
      form.login.value,
      form.age.value,
      form.email.value,
      form.passOrig.value,
      form.passConf.value,
      form.sex.value,
      form.confirm.checked,
      form.image.value,
      form.country.value
    )
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
          <select name="sex" ref={inputRef}>
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
          <input type="file" name="image" ref={inputRef} />
        </label>
        <label>
          Country:
          <select name="country" ref={inputRef}>
            <CountryOpts />
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
