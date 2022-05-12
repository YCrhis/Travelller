import CardlocatAdmin from "../../components/CardlocatAdmin"
import CardSpaces from "../../components/CardSpaces"
import UsersTable from "../../components/UsersTable"
import ContAdmin from "../../layout/admin/ContAdmin"
import { places } from "../../spaces"

const HomeAdmin = () => {
  return (
    <ContAdmin>
      <h1 className="text-zinc-500">Inicial <i className="fa-solid fa-arrow-right"/> Home</h1>

      <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
        <CardlocatAdmin/>
        <CardlocatAdmin/>
        <CardlocatAdmin/>
      </div>

      <h1 className="text-xl text-zinc-600 mt-7 mb-6 border-l-4 border-green-400 px-2">Recent User</h1>
      <div className="p-3 w-[95%] m-auto">
        <UsersTable/>
      </div>


      <h1 className="text-xl text-zinc-600 mt-7 mb-6 border-l-4 border-blue-400 px-2">Locations</h1>
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 w-[90%] m-auto">
              {places.map((space) => (
                <CardSpaces
                  key={space.id}
                  places={true}
                  {...space}
                />
              ))}
            </div>
    </ContAdmin>
  )
}

export default HomeAdmin