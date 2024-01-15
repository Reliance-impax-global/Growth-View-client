import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useUserRole = () => {
  const { user, setUserRole } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${user.email}`
        );

        if (response.data.length > 0) {
          // Assuming the user role is available in the response as 'role'
          const userRole = response.data[0].role;
          setUserRole(userRole);
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user, setUserRole]);

  return userData;
};

export default useUserRole;
