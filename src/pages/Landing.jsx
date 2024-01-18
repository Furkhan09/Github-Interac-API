import { database } from "../services/FireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const Landing = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "SignUp") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/search");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/search");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="flex h-screen items-center justify-center">
        <form
          onSubmit={(e) => handleSubmit(e, login ? "SignIn" : "SignUp")}
          className="w-max bg-indigo p-8 rounded shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-white rounded flex v-screen justify-center item-center px-4 py-2 "
          >
            {login ? "SignIn" : "SignUp"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
