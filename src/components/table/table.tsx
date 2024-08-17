import { useDispatch, useSelector } from 'react-redux'
import { formData, reduxStore } from '../types'
import { useEffect } from 'react'
import { clearState } from '../../services/stateSlice'

export function Table(props: { data: formData; tableTitle: string; name: string }) {
  const state = useSelector((state: reduxStore) => state.state.lastModified)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearState())
    }, 3000)
  }, [])

  return (
    <table className={`table-${props.name} ${(state === props.name && 'fresh') || ''}`}>
      <thead>
        <tr>
          <td colSpan={2}>{props.tableTitle}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name: </td>
          <td>{props.data.login}</td>
        </tr>
        <tr>
          <td>Age: </td>
          <td>{props.data.age}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>{props.data.email}</td>
        </tr>
        <tr>
          <td>Password: </td>
          <td>{props.data.passOrig}</td>
        </tr>
        <tr>
          <td>Gender: </td>
          <td>{props.data.sex}</td>
        </tr>
        <tr>
          <td>Image: </td>
          <td>
            <img src={props.data.imageURL} alt={props.data.imageName} width="300px" />
          </td>
        </tr>
        <tr>
          <td>Country: </td>
          <td>{props.data.country}</td>
        </tr>
      </tbody>
    </table>
  )
}
