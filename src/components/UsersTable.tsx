interface user {
  name: string;
  profileImg: string;
  email:string
}
const UsersTable = (users: any) => {
  return (
    <div className="shadow-lg p-6">
      {users?.data?.map((u: user) => (
        <div className="flex justify-start mb-5 mt-5 items-center">
          <img
            src={u.profileImg || 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full mr-[1rem]"
          />
          <div className="text-left text-zinc-700 w-[200px] ">
            <p>{u.name}</p>
          </div>
          <div className="flex items-center">
            {/* <button className="bg-slate-700 text-white py-2 px-4 rounded-xl">
              Delete
            </button>
            <button className="bg-green-400 text-white py-2 px-4 rounded-xl ml-4">
              Show
            </button> */}
            <p>{u.email}</p>
          </div>
        </div>
      ))}
      <p className="text-zinc-400 text-center cursor-pointer">See More <i className="fa-solid fa-arrow-down"></i></p>
    </div>
  );
};

export default UsersTable;
