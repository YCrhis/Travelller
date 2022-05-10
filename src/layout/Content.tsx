import { useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface props {
    children: JSX.Element | JSX.Element[]
}

const Content = ({children}:props) => {

  useEffect(()=>{
    window.scroll({
      top:0,
      left:0
    })
  },[])

  return (
    <div className="w-[80%] m-auto p-3 mb-[5rem]">
        {children}
    </div>
  )
}

export default Content