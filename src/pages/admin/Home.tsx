import axios from "axios";
import { useEffect, useState } from "react";
import CardlocatAdmin from "../../components/CardlocatAdmin";
import UsersTable from "../../components/UsersTable";
import ContAdmin from "../../layout/admin/ContAdmin";
import { places, spaces } from "../../spaces";

const HomeAdmin = () => {

  const [count, setCount] = useState<any>()
  const [users, setUsers] = useState<any>()

  const loadCount = async() =>{
    const data = await axios.get('/places/types/count?type=Open Fields,Restaurant,Office,Hotel');
    setCount(data?.data)
  }

  const loadUsers = async() =>{
    const data = await axios.get('/users?limit=5');
    setUsers(data)
  }

  console.log(users)

  useEffect(()=>{
    loadCount()
    loadUsers()
  },[])


  return (
    <ContAdmin>
      <h1 className="text-zinc-500">HOME</h1>
      <h1 className="text-xl text-zinc-600 mt-[3rem] mb-6 border-l-4 border-blue-400 px-2">
        Places
      </h1>
      <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-8">
        {spaces.map((space,index)=>(
          <CardlocatAdmin
            key={space.id}
            {...space}
            count={count}
          />
        ))}
      </div>
      <div className="flex items-center">
        <div className="w-[100%]">
          <h1 className="text-xl text-zinc-600 mt-[3rem] mb-3 border-l-4 border-blue-400 px-2">
            Recent User
          </h1>
          <div className="p-3 w-[95%] m-auto">
            <UsersTable 
              {...users}
            />
          </div>
        </div>
        <div className="w-[100%]">
          <h1 className="text-xl text-zinc-600 mt-[3rem] mb-3 border-l-4 border-blue-400 px-2">
            Locations
          </h1>
          <div className="p-3 w-[95%] m-auto">
            <UsersTable />
          </div>
        </div>
      </div>
    </ContAdmin>
  );
};

export default HomeAdmin;
