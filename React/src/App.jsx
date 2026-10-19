import { useState } from 'react'
import AboutMe from "../components/AboutMe"
import MyTown from "../components/MyTown"
import './App.css'

function App() {
  const [page, setPage] = useState("about")

  return (
    <div>
      <nav>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("myTown")}>My Town</button>
      </nav>

      {page === "about" ? <AboutMe /> : <MyTown />}
    </div>
  )
}

export default App;
