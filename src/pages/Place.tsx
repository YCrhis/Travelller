import SliderPlace from "../components/SliderPlace";
import Content from "../layout/Content";

const Place = () => {
  return (
    <Content>
      <SliderPlace />
      <div className="flex xl:flex-row items-start sm:flex-col mt-7  text-zinc-500">
        <div className="xl:w-[70%] sm:w-full p-3">
          <h2 className="text-2xl font-semibold mb-3 text-zinc-700">
            Southern beaches of mancora
          </h2>
          <div className="flex items-center justify-between mb-[2rem] border-b-2 border-zinc-200 pb-7">
            <div className="flex items-center">
              <img
                src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/5:4/w_3330,h_2664,c_limit/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full mr-2"
              />
              <div className="flex">
                <div className="">
                <h1 className="font-semibold text-lg -mb-2">Hello word company</h1>
                <p>Holiday</p>
                </div>
                <i className="fa-solid fa-heart ml-5 text-xl mr-1 text-zinc-600" />
                <p>90</p>
              </div>
            </div>
            <div className="text-right">
              <p>N° of reservations 80</p>
              <p><i className="fa-solid fa-phone mr-1"/> 999 999 999</p>
              </div>
          </div>

          <div className="">
            <div className="">
              <h3 className="text-xl mt-3 font-semibold mb-2">
                About the place
              </h3>
              <p className="p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, provident iusto neque veritatis, deserunt repellat
                accusantium consequatur, corporis impedit aperiam sint aliquid!
                Cum tenetur ut itaque velit laborum dignissimos sit dolor nisi
                quas? Hic nihil, necessitatibus nobis earum totam minima?
              </p>
            </div>
            <div className="">
              <h3 className="text-xl mt-3 font-semibold mb-2">
                Special places
              </h3>
              <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-8 p-3">
                <div className="flex items-center">
                  <i className="fa-solid fa-hotel mr-2"></i>
                  <p>Rooms:</p>
                  <p className="ml-3">9</p>
                </div>

                <div className="flex items-center">
                  <i className="fa-solid fa-restroom mr-2" />
                  <p>Bathroom Included:</p>
                  <p className="ml-3">✔</p>
                </div>

                <div className="flex items-center">
                  <i className="fa-solid fa-chair" />
                  <p>furnished:</p>
                  <p className="ml-3">❌</p>
                </div>
              </div>

              <h3 className="text-xl mt-3 font-semibold mb-2">
                Rules of the place
              </h3>
              <p className="p-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, provident iusto neque veritatis, deserunt repellat
                accusantium consequatur, corporis impedit aperiam sint a
              </p>

              <h3 className="text-xl mt-3 font-semibold mb-2">
                Location
              </h3>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                corporis voluptas ratione quaerat animi a!
              </p>
              <img
                src="https://tipsparatuviaje.com/wp-content/uploads/2019/07/santuario-historico-de-machu-picchu.jpg"
                alt="location"
                className="w-full h-[400px] object-cover p-4"
              />
            </div>
          </div>
        </div>

        <div className="xl:w-[30%] sm:w-[70%] shadow-md">
          <div className="p-4">
            <h1 className="text-red-400 text-3xl font-semibold xl:text-left sm:text-center">
              You can rent this place for{" "}
              <span className="font-bold">$/300.000</span> per day
            </h1>
            <div className="text-xl p-3">
              <h3>Aviable in:</h3>
              <div className="flex items-center justify-center flex-col text-base">
                <p>Monday - Sunday</p>
                <p>All days (24 hours)</p>
              </div>
              <button className="block w-full py-1 bg-red-400 rounded-xl text-white mt-3 text-base">
                I like it
              </button>
              <button className="block w-full py-1 bg-red-400 rounded-xl text-white mt-3 text-base">
                Recerve Place
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </Content>
  );
};

export default Place;
