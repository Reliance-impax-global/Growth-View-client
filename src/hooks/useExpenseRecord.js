import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const useExpenseRecord = () => {
  const { user } = useContext(AuthContext);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(
          `https://rig-task-server.vercel.app/expenses/${user.email}`
        );
        setExpenseData(response.data);
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };

    if (user) {
      fetchExpenses();
    }
  }, [user]);

  return expenseData;
};

export default useExpenseRecord;
