import { Link } from "react-router-dom";

interface button {
  name: string;
  link:string
}

const Button = ({ name , link}: button) => {
  return (
    <Link to={link}>
      <div className="bg-zinc-700 flex items-center justify-center px-5 py-2 text-white rounded-xl cursor-pointer sm:m-4 md:m-0">
        {name}
      </div>
    </Link>
  );
};

export default Button;
