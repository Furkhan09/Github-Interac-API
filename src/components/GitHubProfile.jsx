import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GitHubProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userJson = await userResponse.json();

        // Fetch user repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const reposJson = await reposResponse.json();

        setUserData(userJson);
        setRepos(reposJson);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) {
    return <p className="flex justify-center item-center">Loading...</p>;
  }

  return (
    <div>
      <div className="flex v-screen justify-center item-center ">
        <h2 className="block m-1 p-1 ">{userData.name}</h2>
        <p className="m-1 p-1">Username: {userData.login}</p>
        <p className="m-1 p-1 ">Followers: {userData.followers}</p>
        <p className="m-1 p-1">Following: {userData.following}</p>
      </div>
      {/* <div className="">
        <h3>Repositories:</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
      </div> */}
      <div className="max-w-md mx-auto mt-8">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="flex justify-center item-center m-2">
                Repository
              </th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repository, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray" : "bg-indigo"}
              >
                <td className="border px-4 py-2">{repository.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

GitHubProfile.propTypes = {
  username: PropTypes.string.isRequired,
};
export default GitHubProfile;
