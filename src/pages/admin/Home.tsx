import axios from "axios";
import { useEffect, useState } from "react";
import CardlocatAdmin from "../../components/CardlocatAdmin";
import PlacesTable from "../../components/PlacesTable";
import UsersTable from "../../components/UsersTable";
import ContAdmin from "../../layout/admin/ContAdmin";
import { spaces } from "../../spaces";

const HomeAdmin = () => {

  const [count, setCount] = useState<any>()
  const [users, setUsers] = useState<any>()
  const [places, setPlaces] = useState<any>()

  const loadCount = async() =>{
    const data = await axios.get('/places/types/count?type=Open Fields,Restaurant,Office,Hotel');
    setCount(data?.data)
  }

  const loadUsers = async() =>{
    const data = await axios.get('/users?limit=5');
    setUsers(data)
  }

  const loadPlace = async() =>{
    const data = await axios.get('/places/all/in?limit=5')
    setPlaces(data)
  }

  useEffect(()=>{
    loadCount()
    loadUsers()
    loadPlace()
  },[])


  return (
    <ContAdmin>
      <h1 className="text-zinc-500">HOME</h1>
      <h1 className="text-xl text-zinc-600 mt-[1rem] mb-6 border-l-4 border-blue-400 px-2">
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
      <div className="flex xl:flex-row sm:flex-col items-center">
        <div className="w-[100%]">
          <h1 className="text-xl text-zinc-600 mt-[3rem] mb-3 border-l-4 border-blue-400 px-2">
            Recent User
          </h1>
          <div className="p-3 w-[95%] m-auto">
            <UsersTable 
              users={users}
            />
          </div>
        </div>
        <div className="w-[100%]">
          <h1 className="text-xl text-zinc-600 mt-[3rem] mb-3 border-l-4 border-blue-400 px-2">
            Locations
          </h1>
          <div className="p-3 w-[95%] m-auto">
            <PlacesTable 
             places={places}
            />
          </div>
        </div>
      </div>
    </ContAdmin>
  );
};

export default HomeAdmin;
