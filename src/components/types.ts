type GenFunc = (value: string) => void

export type GenObj = { [key: string]: string | boolean | GenFunc }
