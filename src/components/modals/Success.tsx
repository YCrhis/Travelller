interface modal {
  setResponse: any
  response:string
}

export const Success = ({setResponse,response}:modal) => {
  return (
    <div className="bg-zinc-700 fixed z-50 top-0 left-0 h-[100vh] w-full bg-opacity-50"> 
        <div className="bg-white xl:w-[30%] md:w-[40%] fixed top-0 right-0 left-0 bottom-0 m-auto h-[170px] p-10 text-center">
        <i className="fa-solid fa-x absolute right-2 top-2 cursor-pointer"
        onClick={()=>setResponse('')}
        ></i>
            <h3 className="font-bold text-xl mb-4 text-red-500">data sent successfully</h3>
            <p>the data was sent to the administrator, he will see if everything is correct then your place will be published ╰(*°▽°*)╯</p>
        </div>
        
    </div>
  )
}
