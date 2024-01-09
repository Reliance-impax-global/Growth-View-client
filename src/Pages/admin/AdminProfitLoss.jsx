import { useContext } from "react";
import Navbar from "../../Shared/Navbar";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../provider/AuthProvider";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AdminProfitLoss = () => {
  const { isDashboardOpen } = useContext(AuthContext);

  return (
    <>
      <Navbar title={"Profit/Loss"}></Navbar>
      {/* section 1 */}
      <div
        className={`flex items-end ${
          isDashboardOpen ? "justify-end" : "justify-center"
        } mr-6 `}
      >
        <div className="w-[1540px] h-[673px] bg-white shadow relative">
          <div className="text-black text-[40px] font-semibold ml-20">
            Profit/Loss from Car
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 0,
                right: 10,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                wrapperStyle={{
                  right: -10,

                  top: "70%",
                  transform: "translate(0, -50%)",
                }}
                width={300}
              />
              <Bar
                dataKey="pv"
                fill="#02D13C"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#A21113"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="absolute top-4 right-6 flex items-center justify-center gap-3">
            <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5">
              Monthly
            </div>
            <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5 ">
              Yearly
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div
        className={`flex items-end ${
          isDashboardOpen ? "justify-end" : "justify-center"
        } mr-6 my-36`}
      >
        <div className="w-[1540px] h-[673px] bg-white shadow relative">
          <div className="text-black text-[40px] font-semibold ml-20">
            Profit/Loss from Office
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 0,
                right: 10,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                wrapperStyle={{
                  right: -10,

                  top: "70%",
                  transform: "translate(0, -50%)",
                }}
                width={300}
              />
              <Bar
                dataKey="pv"
                fill="#02D13C"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#A21113"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="absolute top-4 right-6 flex items-center justify-center gap-3">
            <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5">
              Monthly
            </div>
            <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5 ">
              Yearly
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div
        className={`flex items-end ${
          isDashboardOpen ? "justify-end" : "justify-center"
        } mr-6 `}
      >
        <div className="w-[1540px] h-[673px] bg-white shadow relative">
          <div className="text-black text-[40px] font-semibold ml-20">
            Profit/Loss from Website
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 0,
                right: 10,
                left: 20,
                bottom: 25,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend
                verticalAlign="middle"
                align="right"
                layout="vertical"
                wrapperStyle={{
                  right: -10,

                  top: "70%",
                  transform: "translate(0, -50%)",
                }}
                width={300}
              />
              <Bar
                dataKey="pv"
                fill="#02D13C"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#A21113"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="absolute top-4 right-6 flex items-center justify-center gap-3">
            <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5">
              Monthly
            </div>
            <div className="w-auto  h-[50px] text-white text-[20px] font-medium  p-2.5 bg-blue-800 rounded-[20px] justify-center items-center gap-2.5 ">
              Yearly
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfitLoss;
