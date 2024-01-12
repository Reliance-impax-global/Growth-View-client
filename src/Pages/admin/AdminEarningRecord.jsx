import { useContext, useEffect, useState } from "react";
import pdfImg from "../../assets/pdf.svg";
import delateImg from "../../assets/delate.svg";
import Navbar from "../../Shared/Navbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { AuthContext } from "../../provider/AuthProvider";

const AdminEarningRecord = () => {
  const [data, setData] = useState([]);
  const { isDashboardOpen } = useContext(AuthContext);
  useEffect(() => {
    fetch("earningData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // Calculate the maximum value among all income sources for all months
  const maxYValue =
    Math.max(
      ...data.flatMap((entry) => [
        entry.carEarning,
        entry.websiteEarning,
        entry.officeEarning,
      ])
    ) + 10000; // Add an extra 10k to the max value for some padding

  const calculateYTicks = () => {
    const ticks = [];
    for (let i = 15000; i <= maxYValue; i += 15000) {
      ticks.push(i);
    }
    return ticks;
  };

  const formatYTick = (value) => {
    if (value >= 100000) {
      return `${value / 100000} Lac`;
    } else if (value >= 1000) {
      return `${value / 1000} K`;
    }
    return value;
  };

  const yTicks = calculateYTicks();

  return (
    <>
      <Navbar title={"Earning Record"}></Navbar>
      <div
        className={`flex items-end ${
          isDashboardOpen ? "justify-end" : "justify-center"
        } mr-6 `}
      >
        <div className="relative">
          <div
            className="w-[1518px] h-[600px] bg-white shadow "
            style={{
              boxShadow: "0px 0px 41.5px 5px rgba(0, 0, 0, 0.18)",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  type="number"
                  domain={[0, maxYValue]}
                  ticks={yTicks}
                  tickFormatter={formatYTick}
                />
                <Tooltip />
                <Legend
                  verticalAlign="middle"
                  align="right"
                  layout="vertical"
                  wrapperStyle={{
                    right: 10,
                    top: "70%",
                    transform: "translate(0, -50%)",
                  }}
                  width={300}
                />
                <Bar dataKey="carEarning" fill="#AE1E8F" name="Car earning">
                  <LabelList dataKey="carEarning" position="top" />
                </Bar>
                <Bar
                  dataKey="websiteEarning"
                  fill="#05D3A1"
                  name="Website earning"
                >
                  <LabelList dataKey="websiteEarning" position="top" />
                </Bar>
                <Bar
                  dataKey="officeEarning"
                  fill="#E4C10A"
                  name="Office earning"
                >
                  <LabelList dataKey="officeEarning" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="absolute top-4 right-6 flex items-center justify-center gap-3">
              <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5">
                Daily
              </div>
              <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5 ">
                Weekly
              </div>
              <div className="w-auto h-[50px] text-white text-[20px] font-medium  p-2.5 bg-[#029DD1] rounded-[20px] justify-center items-center gap-2.5 ">
                Monthly
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Earning record section */}
      <div className="mt-[80px] px-[40px] max-w-screen">
        <div className="flex justify-between">
          <h3 className="text-blue-800 text-[40px] font-semibold  ">
            Car Earning
          </h3>
          <select className="select select-bordered w-[170px] h-[50px]">
            <option disabled selected>
              Sort By?
            </option>
            <option>Date</option>
            <option>Price</option>
          </select>
        </div>
        <div className="w-[1782.01px] h-[0px] border border-blue-200 mx-auto my-12"></div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border-none">
              <tr className="text-black text-[25px] font-medium font-['Inter']">
                <th>Earning Source</th>
                <th>Country</th>
                <th>Place </th>
                <th>Asset Type </th>
                <th>Asset Name </th>
                <th>Date of Earning </th>
                <th>Amount</th>
                <th>Client Name</th>
                <th>Payment Proof</th>
              </tr>
            </thead>
            <tbody className="text-neutral-400 text-[25px]">
              {/* row 1 */}
              <tr>
                <td>
                  <ul>
                    <li>Kolkata</li>
                    <li>Pune </li>
                  </ul>
                </td>

                <td>IN</td>
                <td>Bengal</td>
                <td>Car</td>
                <td>Range Rover</td>
                <td>09/12/2023</td>
                <td>5000</td>
                <td>Amit Arora</td>
                <td>
                  <img src={pdfImg} alt="" />
                </td>
                <td>
                  <img src={delateImg} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Kolkata </li>
                    <li>Pune </li>
                  </ul>
                </td>

                <td>IN</td>
                <td>Bengal</td>
                <td>Car</td>
                <td>Range Rover</td>
                <td>09/12/2023</td>
                <td>5000</td>
                <td>Amit Arora</td>
                <td>
                  <img src={pdfImg} alt="" />
                </td>
                <td>
                  <img src={delateImg} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>Kolkata </li>
                    <li>Pune </li>
                  </ul>
                </td>

                <td>IN</td>
                <td>Bengal</td>
                <td>Car</td>
                <td>Range Rover</td>
                <td>09/12/2023</td>
                <td>5000</td>
                <td>Amit Arora</td>
                <td>
                  <img src={pdfImg} alt="" />
                </td>
                <td>
                  <img src={delateImg} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminEarningRecord;
