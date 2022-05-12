interface props{
    children: JSX.Element | JSX.Element[]
}

const ContAdmin = ({children}:props) => {
  return (
    <div className="w-[80%] p-4 m-auto">{children}</div>
  )
}

export default ContAdmin