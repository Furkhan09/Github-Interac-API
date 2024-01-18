import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  return (
    <header className="bg-indigo text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Github Interactive API</h1>
      </div>
      <div className="flex items-center space-x-4">
        <a
          onClick={() => history("/")}
          href="#"
          className="text-black p-2 bg-white rounded-full"
        >
          Login
        </a>
        <a
          onClick={() => history("/")}
          href="#"
          className="text-black p-2 bg-white rounded-full"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Header;
