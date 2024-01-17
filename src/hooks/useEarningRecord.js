import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useEarningRecord = () => {
  const { user } = useContext(AuthContext);
  const [earningData, setEarningData] = useState([]);

  useEffect(() => {
    const fetchEarnings = async () => {
      try {
        const response = await axios.get(
          `https://rig-task-server.vercel.app/earnings/${user.email}`
        );
        // Ensure response.data is always an array
        setEarningData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching earnings data:", error);
      }
    };

    if (user) {
      fetchEarnings();
    }
  }, [user]);

  return earningData;
};

export default useEarningRecord;
