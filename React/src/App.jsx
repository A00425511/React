import { useState } from 'react'
import AboutMe from "../components/AboutMe"
import MyTown from "../components/MyTown"
import './App.css'

const App = () => {
  const [page, setPage] = useState("about")

  return (
    
    <div>
      <h1>Welcome!</h1>
      <nav>
        <button onClick={() => setPage("about")}>About</button>
        <br />
        <button onClick={() => setPage("myTown")}>My Town</button>
      </nav>

      {page === "about" ? <AboutMe /> : <MyTown />}
    </div>
  )
}

export default App;
