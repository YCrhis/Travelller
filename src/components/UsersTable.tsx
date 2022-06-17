import axios from "axios";

interface user {
  name: string;
  profileImg: string;
  email: string;
}
const UsersTable = ({ users, page }: any) => {

  const handleDelete = (id:any) =>{
    if(window.confirm('Do you wan to delete this user?')){
      axios.delete('/users/'+id)
    }
  }

  return (
    <div className="shadow-lg p-6">
      {users?.data?.map((u: any) => (
        <div className="flex justify-start mb-5 mt-2 items-center" key={u.name}>
          <img
            src={u.profileImg ||
              "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full mr-[1rem]"
          />
          <div className="text-left text-zinc-700 w-[200px] ">
            <p>{u.name}</p>
          </div>
          <div className="flex items-center  w-[270px]">
            <p>{u.email}</p>
          </div>
          {page === true &&
            (
              <>
              <div className="flex items-center w-[270px]">
                <p>{u.createdAt}</p>
              </div>
              <div className="flex items-center w-[270px]">
                <button className="py-1 rounded-2xl px-5 bg-pink-400 text-white mr-3"  onClick={()=>handleDelete(u._id)}>Delete</button>
                <button className="py-1 rounded-2xl px-5 bg-blue-400 text-white">Update</button>
              </div>
              </>
            )}
        </div>
      ))}
      {!page === true &&
        (
          <p className="text-zinc-400 text-center cursor-pointer">
            See More <i className="fa-solid fa-arrow-down"></i>
          </p>
        )}
    </div>
  );
};

export default UsersTable;
