import { useState } from "react";
import GitHubProfile from "./GitHubProfile";
import { database } from "../services/FireBaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const GitHubSearch = () => {
  const [username, setUsername] = useState("");
  const [searchedUsername, setSearchedUsername] = useState("");

  const history = useNavigate();
  const handleSearch = () => {
    setSearchedUsername(username);
  };
  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <div>
      <div className="flex v-screen justify-center item-center mt-3">
        {/* <label>
          Enter GitHub Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label> */}

        <div className="mb-4">
          <label htmlFor="text" className="text-gray-700 font-bold mb-2">
            username:
            <input
              type="text"
              id="username"
              name="username"
              className="ml-1 px-3 py-2 border rounded-md font-light"
              placeholder="github username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <button
            className="bg-indigo rounded ml-3 p-2"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="bg-indigo rounded ml-3 p-2"
            type="button"
            onClick={handleClick}
          >
            signout
          </button>
        </div>
      </div>
      {searchedUsername && <GitHubProfile username={searchedUsername} />}
    </div>
  );
};

export default GitHubSearch;
