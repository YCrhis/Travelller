import CardSpaces from "../components/CardSpaces";
import HotelCard from "../components/HotelCard";
import Content from "../layout/Content";
import { places } from "../spaces";

const Search = () => {
  return (
    <Content>
      <h3 className="font-semibold mb-5 mt-5">
        Search according to your preferences or needs
      </h3>
      <div className="flex">
        <select
          name="select"
          id=""
          className="p-3 border-2 border-zinc-300/100 rounded-xl mr-5 text-zinc-600"
        >
          <option value="">Cusco</option>
          <option value="">Arequipa</option>
          <option value="">Juliaca</option>
        </select>
        <select
          name="select"
          id=""
          className="p-3 border-2 border-zinc-300/100 rounded-xl text-zinc-600"
        >
          <option value="">$0 to $3.000</option>
          <option value="">$3.000 to $5.000</option>
          <option value="">$5.000 to $8.000</option>
        </select>
      </div>
      <div className="mt-10">
        <h3 className="font-semibold mb-5">What space would like to rent?</h3>
        <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {places.map((space) => (
              <CardSpaces
                key={space.id}
                places={true}
                {...space}
              />
            ))}
          </div>
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-red-400 mb-5">👁  Results of your search</h3>
        <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {places.map((space) => (
              <HotelCard
              />
            ))}
          </div>
      </div>
    </Content>
  );
};

export default Search;
