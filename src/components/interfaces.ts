export interface IAPI {
  start: () => Promise<undefined>
  search: (value: string) => Promise<undefined>
  fakeRequest: () => Promise<undefined>
}
