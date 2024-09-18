import CreateProfile from "./components/CreateProfile"
import Layout from "./pages/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/createprofile" element={<CreateProfile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
