import { useNavigate } from "react-router-dom";
import axios from "axios";

const PlacesTable = ({ places, page, allowed }: any) => {

  const navigate = useNavigate()

  const handleDelete = async(id: any) => {
    if (window.confirm("Do you wan to delete this user?")) {
      const data = await axios.put("/places/allowed/delete/" + id);
      if(data.data === "ok"){
        navigate('/admin/places/allowed')
      }
    }
  };

  const handleAccept = async(id:any) =>{
    if (window.confirm("Do you wan to delete this user?")) {
      const data = await axios.put("/places/allowed/"+id)
      if(data.data === "ok"){
        navigate('/admin/places')
      }
    }
  }

  return (
    <div className="shadow-lg p-6 overflow-x-scroll">
      {places?.data?.map((p: any) => (
        <div className="flex justify-start mb-5 mt-2 items-center" key={p._id}>
          <img
            src={p?.photos[0] ||
              "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"}
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full mr-[1rem]"
          />
          <div className="text-left text-zinc-700 sm:w-[200px] ">
            <p>{p?.name}</p>
          </div>
          <div className="flex items-center sm:w-[200px]">
            <p>{p?.company}</p>
          </div>
          {page
            ? (
              <>
                <div className="flex items-center sm:w-[300px]">
                  <p>{p?.email}</p>
                </div>
                <div className="flex items-center sm:w-[200px]">
                  <p>{p?.phone}</p>
                </div>
                {}
                <div className="flex items-center">
                  <button
                    className="py-1 rounded-2xl px-5 bg-pink-400 text-white mr-3"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )
            : null}
          {allowed === true
            ? (
              <button className="py-1 rounded-2xl px-5 bg-blue-400 text-white" onClick={()=>handleAccept(p?._id)}>
                Accept
              </button>
            )
            : null}
        </div>
      ))}
      {!page &&
        (
          <p className="text-zinc-400 text-center cursor-pointer">
            See More <i className="fa-solid fa-arrow-down"></i>
          </p>
        )}
    </div>
  );
};

export default PlacesTable;
