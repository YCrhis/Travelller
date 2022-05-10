import { Link } from "react-router-dom";

interface button {
  name: string;
}

const Button = ({ name }: button) => {
  return (
    <Link to="new">
      <div className="bg-zinc-700 flex items-center justify-center px-5 py-2 text-white rounded-xl cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default Button;
