import { useContext } from "react";
import ManagerDashboard from "../manager/ManagerDashboard";
import { AuthContext } from "../../provider/AuthProvider";
import HomeAdmin from "./HomeAdmin";

const Home = () => {
  const { userRole } = useContext(AuthContext);

  return (
    <>
      {userRole === "admin" ? (
        <HomeAdmin></HomeAdmin>
      ) : (
        <ManagerDashboard></ManagerDashboard>
      )}
    </>
  );
};

export default Home;
