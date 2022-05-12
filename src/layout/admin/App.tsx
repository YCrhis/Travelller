import { Outlet } from "react-router-dom"
import HeaderAdmin from "./Header"

const App = () => {
  return (
    <div className="flex items-start">
        <HeaderAdmin/>
        <Outlet/>
    </div>
  )
}

export default App