import { useState } from 'react'
import { LocalStorage } from '../utils/localStorage'
import { CLASS_NAMES, TEXT_CONTENT } from '../constants'

import './search.css'

export function Search(props: { onClick: (value: string) => void }) {
  const [value, setValue] = useState(LocalStorage().getValue())

  const buttonHandler = (event: Event) => {
    let tempValue = value

    if ((event.target as HTMLInputElement).textContent === TEXT_CONTENT.btnHome) {
      tempValue = ''
      LocalStorage().saveValue('')
    }

    props.onClick(tempValue)
    setValue(tempValue.trim())
    LocalStorage().saveValue(tempValue.trim())
  }

  return (
    <div className={CLASS_NAMES.searchContMain}>
      <button onClick={(event) => buttonHandler(event as unknown as Event)}>{TEXT_CONTENT.btnHome}</button>
      <form className={CLASS_NAMES.searchPanelWrapper} onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          value={value}
          placeholder={TEXT_CONTENT.searchPH}
          onChange={(event) => {
            setValue(event.target.value)
          }}
        />
        <button type="submit" onClick={(event) => buttonHandler(event as unknown as Event)}>
          {TEXT_CONTENT.btnSearch}
        </button>
      </form>
      <button
        className={CLASS_NAMES.errorBtn}
        onClick={() => {
          props.onClick(TEXT_CONTENT.errorID)
        }}
      >
        {TEXT_CONTENT.btnError}
      </button>
    </div>
  )
}
