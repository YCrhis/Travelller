import { Link } from "react-router-dom";

const HotelCard = () => {
  return (
    <div className="shadow-md">
      <img
        src="https://www.somosperu.org.pe/wp-content/uploads/2017/09/Hotel-Hilton-Lima-Miraflores.jpg"
        alt="hotel"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Hotel, location in Piura</h3>
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
          <p className="text-sm text-zinc-400">Holiday</p>
          <i className="fa-solid fa-thumbs-up text-zinc-300 text-xl ml-4 mr-1" />
          <p className="text-sm text-zinc-400">23</p>
        </div>
        <p className="p-2 text-zinc-500 text-justify mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam
          magnam, magni quas laudantium accusantium.
        </p>
        <Link to="/place/1234" className="w-[100%] m-auto py-2 bg-red-400 text-white block text-center rounded-xl hover:bg-red-500 transition-all">More Information</Link>
      </div>
    </div>
  );
};

export default HotelCard;
