import CardSpaces from "../components/CardSpaces";
import HotelCard from "../components/HotelCard";
import Content from "../layout/Content";
import { spaces } from "../spaces";
import { useFetch } from "../hooks/useFetch";
import { ChangeEvent, useState } from "react";
import NotFound from "../components/NotFound";
import { motion } from "framer-motion";
import { pageAnimation, transition2 } from "../lib/animation";
import Loading from "../components/Loading";

interface space {
  name: string;
  value: string;
}

const Search = () => {
  const [filters, setFilters] = useState({
    space: "",
    min: "",
    max: "",
  });

  const { info, load, error } = useFetch(
    `http://localhost:8080/places?type=${filters?.space}&min=${filters
      ?.min}&max=${filters?.max}`,
  );

  const handleChange = (
    { target }: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <motion.div
      className=""
      initial="out"
      animate="in"
      exit="out"
      variants={pageAnimation}
      transition={transition2}
    >
      <Content>
        <h3 className="font-semibold mb-5 mt-5">
          Search according to your preferences or needs
        </h3>
        <div className="flex items-center">
          <select
            name="space"
            className="p-3 border-2 border-zinc-300/100 rounded-xl mr-5 text-zinc-600"
            onChange={handleChange}
          >
            {spaces.map((space) => (
              <option value={space.name} key={space.id}>{space.name}</option>
            ))}
          </select>
          <div className="flex flex-col xl:w-[10%] sm:w-[30%]">
            <div className="flex items-center justify-around w-[100%] text-zinc-600">
              <label>MAX</label>
              <input
                type="number"
                name="max"
                className="border-2 border-zinc-300/100 w-[60px] p-1"
                onChange={handleChange}
                defaultValue={0}
                min="1"
              />
            </div>

            <div className="flex items-center justify-around mt-3 text-zinc-600">
              <label>MIN</label>
              <input
                type="number"
                name="min"
                className="border-2 border-zinc-300/100 w-[60px] p-1"
                onChange={handleChange}
                min="1"
                defaultValue={999}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-semibold text-xl mb-5">
            What space would like to rent?
          </h3>
          <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {spaces.map((space) => (
              <CardSpaces key={space.id} places={true} {...space} />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold  mb-5">
            Results of your search
          </h3>
          {info?.data.length === 0 && (
            <div className="">
              <NotFound />
            </div>
          )}
          {load && <Loading/>}
          <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 ">
            {info?.data.map((inf: any) => <HotelCard {...inf} key={inf._id} />)}
          </div>
        </div>
      </Content>
    </motion.div>
  );
};

export default Search;
