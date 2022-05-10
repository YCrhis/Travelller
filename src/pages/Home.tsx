import Button from "../components/Button";
import CardSpaces from "../components/CardSpaces";
import Content from "../layout/Content";
import { places, spaces } from "../spaces";

function Home() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center flex-col h-[80vh]">
          <h1 className="titleBig font-bold text-red-400">RESERVATION</h1>
          <h3 className="titleNm">
            Start Doing It In{" "}
            <span className="text-red-400 font-bold">"Traveller"</span>
          </h3>
          <div className="flex mt-7 text-2xl">
            <p className="">Cities |</p>
            <select name="" id="" className="px-5">
              <option value="">Peru</option>
              <option value="">Peru</option>
              <option value="">Peru</option>
              <option value="">Peru</option>
            </select>
          </div>
          <div className="text-xl mt-6">
            <Button name="Search" />
          </div>
        </div>
        <Content>
          <div className="flex xl:flex-row sm:flex-col">
            <div className="">
              <img
                src="https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg?t=st=1652028073~exp=1652028673~hmac=e90131f21980292c4efc05d4f6db05e4ef07c11dbd1d19aeba0ff109b595bf55&w=740"
                alt="introduction"
                className="w-full"
              />
            </div>
            <div className="xl:w-[60%] sm:w-[100%]">
              <h1 className="text-3xl font-bold mb-5">
                Who Is <span className="text-red-400">Traveller</span>?
              </h1>
              <p className="p-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                odit impedit. Vero modi, voluptatem possimus consequuntur
                molestiae ut magnam minus recusandae illo accusamus quam
                praesentium deleniti ea voluptates, odit quasi?
              </p>
              <h2 className="font-bold text-lg">
                <i className="fa-solid fa-shield" /> Security
              </h2>
              <p className="p-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                odit impedit. Vero modi, voluptatem possimus
              </p>
              <h2 className="font-bold text-lg">
                <i className="fa-solid fa-location-pin" /> Locations
              </h2>
              <p className="p-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                odit impedit. Vero modi, voluptatem possimus
              </p>
              <h2 className="font-bold text-lg">
                <i className="fa-solid fa-earth-africa" /> Hotels
              </h2>

              <p className="p-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
                odit impedit. Vero modi, voluptatem possimus
              </p>
            </div>
          </div>
          <div className="mt-6 mb-6">
            <h1 className="text-2xl text-zinc-600 mb-10">
              What Place Do You Want ?
            </h1>
            <div className="grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
              {spaces.map((space) => (
                <CardSpaces
                  key={space.id}
                  {...space}
                  places={false}
                />
              ))}
            </div>
          </div>
          <div className="mt-6 mb-6">
            <h1 className="text-2xl text-zinc-600 mb-10 mt-[5rem]">
              Most Popular Places ?
            </h1>
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
          <div className="mt-[7rem] add w-full text-white p-6 rounded-xl">
            <h1 className="text-4xl font-bold">
              Do You Have Your Special Place?
            </h1>
            <p className="p-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quis, <br /> laudantium deserunt soluta illo veritatis?
            </p>
            <div className="xl:w-[30%] sm:w-[60%]">
              <Button name="Add Your Place" />
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}

export default Home;
