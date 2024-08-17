import { ObjectSchema } from 'yup'
import { formData } from '../components/types'

export function objectFilter(obj: ObjectSchema<formData>, value: string) {
  for (const key in obj.fields) {
    if (key === value) delete (obj.fields as unknown as { [key: string]: string })[key]
  }
  return obj
}
