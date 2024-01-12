import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import { AuthContext } from "../../provider/AuthProvider";
import img from "../../assets/delate.svg";
import Swal from "sweetalert2";
const AdminAvailableAssets = () => {
  const [assets, setAssets] = useState([]);
  const { isDashboardOpen } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rig-task-server.vercel.app/assets"
        );
        setAssets(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [assets]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://rig-task-server.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount == 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };


  return (
    <div>
      <Navbar title={"Available Assets"}></Navbar>
      <div
        className={`flex items-end ${
          isDashboardOpen ? "justify-end" : "justify-center"
        } mr-6 `}
      >
        <div className={`mt-[50px] px-[40px] ${isDashboardOpen ? "w-5/6" : "w-full"}`}>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              {assets?.map((asset) => (
                <table key={asset._id} className="table my-6">
                  {/* head */}
                  <thead className="border-none">
                    <tr className="text-black text-[25px] font-medium ">
                      <th className="w-1/6">Country</th>
                      <th className="w-1/6">Place</th>
                      <th className="w-1/6">Asset Category </th>
                      <th className="w-1/6">Asset Name </th>
                      <th className="w-1/6">Asset Expense Amount </th>
                      <th className="w-1/6">Action </th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-400 text-[25px]">
                    <tr>
                      <td>{asset.country}</td>
                      <td>{asset.place}</td>
                      <td>{asset.asset_category}</td>
                      <td>{asset.asset_name}</td>
                      <td>{asset.asset_expense_amount}</td>
                      <td>
                        <img
                          onClick={() => handleDelete(asset._id)}
                          className="cursor-pointer"
                          src={img}
                          alt=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAvailableAssets;
