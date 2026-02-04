import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/me", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  if (user === undefined) {
    return <h2>Loading dashboard...</h2>;
  }

  if (user === null) {
    window.location.href = "http://localhost:3001";
    return null;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard />
    </>
  );
};

export default Home;
