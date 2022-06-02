import { Link } from "react-router-dom";

interface place {
  location: string;
  name: string;
  company: string;
  price: string;
  descirption: string;
  _id: string;
  photos: [string];
}

const HotelCard = (
  { photos, name, company, price, descirption, _id }: place,
) => {
  const newDescirption = () => {
    if (descirption.length > 70) {
      const desc = descirption.slice(0, 50);
      return desc + ' ...';
    }else{
      return descirption
    }
  };

  return (
    <div className="shadow-md">
      <img
        src={photos[0]}
        alt="hotel"
        className="w-full h-[250px] object-cover"
      />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>

        <div className="flex items-center justify-between mt-3 mb-3">
          <p className="text-sm text-zinc-400">
            <span className="text-black">Company</span>: {company}
          </p>
          <div className="text-sm text-zinc-800">
            Price: $/.{price}
          </div>
        </div>
        <p className="p-2 text-zinc-500 text-justify mb-4">
          {newDescirption()}
        </p>
        <Link
          to={"/place/" + _id}
          className="w-[100%] m-auto py-2 bg-red-400 text-white block text-center rounded-xl hover:bg-red-500 transition-all"
        >
          More Information
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
