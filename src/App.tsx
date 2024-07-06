// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Component, ReactNode } from 'react'
import Search from './components/search/search'
import Results from './components/results/results'

class App extends Component<{ [key: string]: string }, { [key: string]: string | boolean }> {
  constructor(props: { [key: string]: string }) {
    super(props)
    this.state = {
      isSearched: false,
    }
  }

  buttonHandler(value: string) {
    console.log(value)
  }

  render(): ReactNode {
    return (
      <>
        <Search onChange={this.buttonHandler} />
        <Results />
      </>
    )
  }
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//     </>
//   )
// }

export default App
