import { API } from '../../services/API'
import { Search } from '../../components/search/search'
import { createContext, Dispatch, SetStateAction } from 'react'
import { Results } from '../../components/results/results'
import { FilmResp } from '../../components/types'

export const getServerSideProps = async (context: { query: { page?: string; search?: string } }) => {
  const data = await API().getFilms({ value: context.query.search || '', page: context.query.page || '1' })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { results: data },
  }
}

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
} as {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
})

const Posts = ({ results }: { results: FilmResp }) => {
  console.log('ended')
  return (
    <>
      <Search />
      <Results results={results} />
    </>
  )
}

export default Posts
