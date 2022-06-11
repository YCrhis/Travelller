interface space {
  name:string
  img:string
  count:any
}

const CardlocatAdmin = ({name,img,count}:space) => {
  return (
    <div className="shadow-xl p-5 w-[250px] m-auto cursor-pointer">
      <div className="flex items-center mb-3">
        <img src={img} alt={name} className="w-[40px] h-[40px] rounded-full mr-2" />
        <p className="text-xl text-zinc-500">{name}</p>
      </div>
      <div className="flex items-center">
        <i className="fa-solid fa-earth-africa mr-2" />
        <p className="text-2xl text-zinc-600">{count} <span className="text-sm">locations</span></p>
      </div>
      <div className="w-full bg-green-400 h-[3px] mt-4"></div>
    </div>
  );
};

export default CardlocatAdmin;
