import { Link } from "react-router-dom";

interface place {
  location:string,
  name:string,
  company:string,
  price:string,
  descirption:string,
  _id:string,
  photos:[string]
}

const HotelCard = ({photos,name, company,  price, descirption, _id}:place) => {

  return (
    <div className="shadow-md">
      <img
        src={photos[0]}
        alt="hotel"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="">
            <button>
              <i className="fa-solid fa-heart text-2xl text-zinc-600" />
            </button>
          </div>
        </div>

        <div className="flex items-center mt-3">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/21/91/97/7a/bar-lounge.jpg"
            alt="user"
            className="w-[33px] h-[33px] rounded-full object-cover mr-2"
          />
          <p className="text-sm text-zinc-400">{company}</p>
          <p className="ml-6 text-bold">$/.</p>
          <p className="text-sm text-bold text-lg">{price}</p>
        </div>
        <p className="p-2 text-zinc-500 text-justify mb-4">
          {descirption}
        </p>
        <Link to={"/place/"+_id} className="w-[100%] m-auto py-2 bg-red-400 text-white block text-center rounded-xl hover:bg-red-500 transition-all">More Information</Link>
      </div>
    </div>
  );
};

export default HotelCard;
