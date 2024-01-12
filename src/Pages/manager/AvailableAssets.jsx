import axios from "axios";
import { useEffect, useState } from "react";

const AvailableAssets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://rig-task-server-57d4pbct0-abrarazmain.vercel.app/assets"
          "https://rig-task-server.vercel.app/assets"
        );
        setAssets(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[50px] px-[40px]">
      <h3 className="text-blue-800 text-[40px] font-semibold font-['Inter'] ">
        Available Assets
      </h3>
      <div className="w-[1782.01px] h-[0px] border border-blue-200 mx-auto my-12"></div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          {assets.map((asset) => (
            <table key={asset._id} className="table my-6">
              {/* head */}
              <thead className="border-none">
                <tr className="text-black text-[25px] font-medium ">
                  <th className="w-1/6">Country</th>
                  <th className="w-1/6">Place</th>
                  <th className="w-1/6">Asset Category </th>
                  <th className="w-1/6">Asset Name </th>
                  <th className="w-1/6">Asset Expense Amount </th>
                </tr>
              </thead>
              <tbody className="text-neutral-400 text-[25px]">
                <tr>
                  <th>{asset.country}</th>
                  <th>{asset.place}</th>
                  <th>{asset.asset_category}</th>
                  <th>{asset.asset_name}</th>
                  <th>{asset.asset_expense_amount}</th>
                </tr>
              </tbody>
            </table>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AvailableAssets;
