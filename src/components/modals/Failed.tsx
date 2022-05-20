interface modal {
    setResponse: any
    response:string
  }
const Failed = ({setResponse, response}:modal) => {
  return (
    <div className="bg-zinc-700 fixed z-50 top-0 left-0 h-[100vh] w-full bg-opacity-50"> 
        <div className="bg-white xl:w-[30%] md:w-[40%] fixed top-0 right-0 left-0 bottom-0 m-auto h-[170px] p-10 text-center">
        <i className="fa-solid fa-x absolute right-2 top-2 cursor-pointer"
        onClick={()=>setResponse('')}
        ></i>
            <h3 className="font-bold text-xl mb-4 text-red-500">You have to pass correct data</h3>
            <p>Sorry but some data could be wrong, just try it again</p>
        </div>
        
    </div>
  )
}

export default Failed