import { PieChart, Pie, Cell } from "recharts";
import AvailableAssets from "./AvailableAssets";
import Navbar from "../../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#FFF068", "#F700ED", "#02D13C"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ManagerDashboard = () => {
  const { isDashboardOpen } = useContext(AuthContext);


  return (
    <>
      <Navbar title={"Dashboard"}></Navbar>{" "}
      <div
        className={`flex gap-5 ${
          isDashboardOpen ? "justify-end" : "justify-center"
        } items-center`}
      >
        <div
          style={{
            boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.25)",
          }}
          className={`${
            isDashboardOpen ? "w-[759px]" : "w-[1009px]"
          } h-[486px] bg-white rounded-[10px] shadow flex justify-around items-center ml-24`}
        >
          {" "}
          <div width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center mr-4">
                <div className="w-10 h-10 bg-yellow-200 mr-[40px]" />
                <div className="text-center text-black text-[25px]">
                  This Month’s
                  <br />
                  Office Earnings
                </div>
              </div>
              <div className="flex justify-center items-center my-4">
                <div className="w-10 h-10 bg-[#F700ED] mr-[40px]" />
                <div className="text-center text-black text-[25px]">
                  This Month’s
                  <br />
                  Website Earning
                </div>
              </div>
              <div className="flex justify-center items-center mr-4">
                <div className="w-10 h-10 bg-[#02D13C] mr-[40px]" />
                <div className="text-center text-black text-[25px]">
                  Today’s Added
                  <br />
                  Car Earning
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 5px 5px rgba(0, 0, 0, 0.25)",
          }}
          className="w-[749px] h-[486px] bg-white rounded-[10px] shadow flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <p className="text-blue-800 text-[80px] font-bold ">1</p>
            <h3 className="w-[335px] text-center text-cyan-500 text-[35px] font-medium">
              Car Expense Added
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-blue-800 text-[80px] font-bold ">0</p>
            <h3 className="w-[335px] text-center text-cyan-500 text-[35px] font-medium">
              Website Expense Added
            </h3>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-blue-800 text-[80px] font-bold ">1</p>
            <h3 className="w-[335px] text-center text-cyan-500 text-[35px] font-medium">
              Office Expense Added
            </h3>
          </div>
        </div>
      </div>
      <div>
        <AvailableAssets></AvailableAssets>
      </div>
    </>
  );
};

export default ManagerDashboard;
