import { Link } from "react-router-dom";

interface space {
  img: string;
  name: string;
  places: boolean;
  likes:number
}

const CardSpaces = ({ img, name, places, likes }: space) => {
  return (
    <Link to="/search">
    <div className="shadow-md cursor-pointer">
      <img
        src={img}
        alt=""
        className="w-[100%]  object-cover h-[240px]"
      />
      <div className="p-3">
        <h3 className="text">{name}</h3>
        <p className="text-zinc-400 mb-7">Lorem ipsum dolor sit amet.</p>
        <div className="flex justify-between">
          <div className="flex">
            <span>
              <i className="fa-solid fa-heart text-xl mr-1 text-red-400" />
            </span>
            <p className="text-zinc-600">34 likes</p>
          </div>
          {places &&
            (
              <div className="flex">
                <span>
                <i className="fa-solid fa-book text-xl mr-1 text-zinc-500"/>
                </span>
                <p className="text-zinc-600">{likes} Places</p>
              </div>
            )}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CardSpaces;
