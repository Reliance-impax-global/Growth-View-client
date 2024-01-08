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
        <table className="table">
          {/* head */}
          {assets.map((asset) => (
            <table key={asset._id} className="table my-12">
              {/* head */}
              <thead className="border-none">
                <tr className="text-black text-[25px] font-medium font-['Inter']">
                  <th>Country</th>
                  <th>Place</th>
                  <th>Asset Category </th>
                  <th>Asset Name </th>
                  <th>Asset Expense Amount </th>
                </tr>
              </thead>
              <tbody className="text-neutral-400 text-[25px]">
                {/* row 1 */}
                <tr>
                  <td>{asset.country}</td>
                  <td>
                    <ul className="space-y-4">
                      {asset.place.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{asset.asset_category}</td>
                  <td>
                    <ul className="space-y-4">
                      {asset.asset_name.map((n, i) => (
                        <li key={i}>{n}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    {" "}
                    <ul className="space-y-4">
                      {asset.asset_expense_amount.map((e, i) => (
                        <li key={i}>{e}</li>
                      ))}
                    </ul>
                  </td>
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
