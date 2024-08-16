import { formData } from '../types'

export function Table(props: { data: formData; tableTitle: string }) {
  return (
    <table>
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
