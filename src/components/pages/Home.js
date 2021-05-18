import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const localUser = localStorage.getItem("user");
  useEffect(() => {
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, [localUser]);

  return (
    <div className="home-page center_content">
      <div>
        <p>You have successfully registered.</p>
        <h3>
          Wellcome to <mark>Home</mark> page!
        </h3>
        <p>Name : {user.fullName}</p>
        <p>Username : {user.username}</p>
        <p>Email : {user.email}</p>
      </div>
    </div>
  );
};

export default Home;
