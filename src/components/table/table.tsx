import { useDispatch, useSelector } from 'react-redux'
import { formData, reduxStore } from '../types'
import { useEffect } from 'react'
import { clearState } from '../../services/stateSlice'
import { FORM_DATA_EMPTY, TEXT_CONTENT } from '../constants'

export function Table(props: { data: formData; tableTitle: string; name: string }) {
  const state = useSelector((state: reduxStore) => state.state.lastModified)
  const dispatch = useDispatch()
  const tableHeader = (
    <thead>
      <tr>
        <td colSpan={2}>{props.tableTitle}</td>
      </tr>
    </thead>
  )

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearState())
    }, 3000)
  }, [])

  if (props.data === FORM_DATA_EMPTY)
    return (
      <table>
        {tableHeader}
        <tbody>
          <tr>
            <td>{TEXT_CONTENT.tablePH}</td>
          </tr>
        </tbody>
      </table>
    )

  return (
    <table className={`table-${props.name} ${(state === props.name && 'fresh') || ''}`}>
      {tableHeader}
      <tbody>
        <tr>
          <td>{TEXT_CONTENT.fields.login}</td>
          <td>{props.data.login}</td>
        </tr>
        <tr>
          <td>{TEXT_CONTENT.fields.age}</td>
          <td>{props.data.age}</td>
        </tr>
        <tr>
          <td>{TEXT_CONTENT.fields.email}</td>
          <td>{props.data.email}</td>
        </tr>
        <tr>
          <td>{TEXT_CONTENT.fields.passGlobal}</td>
          <td>{props.data.passOrig}</td>
        </tr>
        <tr>
          <td>{TEXT_CONTENT.fields.sex}</td>
          <td>{props.data.sex}</td>
        </tr>
        <tr>
          <td>{TEXT_CONTENT.fields.image}</td>
          <td>
            <img src={props.data.imageURL} alt={props.data.imageName} width="300px" />
          </td>
        </tr>
        <tr>
          <td>{TEXT_CONTENT.fields.country}</td>
          <td>{props.data.country}</td>
        </tr>
      </tbody>
    </table>
  )
}
