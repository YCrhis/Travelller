import Footer from "./Footer"
import Header from "./Header"

interface props {
    children: JSX.Element | JSX.Element[]
}

const Content = ({children}:props) => {
  return (
    <div className="w-[80%] m-auto p-3">
        {children}
    </div>
  )
}

export default Content