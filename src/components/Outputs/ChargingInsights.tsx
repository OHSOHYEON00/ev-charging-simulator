import useCalculate from "hooks/useCalculate";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const ChargingInsights = () => {
  const { tableData } = useCalculate({});

  if (!tableData) {
    return <></>;
  }

  return (
    <>
      <ResponsiveContainer width={"100%"} height={300} className={"mt-12"}>
        <BarChart
          data={tableData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="ce"
            fill="#B3CDAD"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="mp"
            fill="#8884d8"
            activeBar={<Rectangle fill="#8884d8" stroke="#8884d8" />}
          />
          <Bar
            dataKey="ec"
            fill="#FF5F5E"
            activeBar={<Rectangle fill="gold" stroke="gold" />}
          />
          <Legend />
        </BarChart>
      </ResponsiveContainer>

      <section className="w-80 text-left text-gray-400 pt-8">
        <div>
          <span className="font-semibold">* ce</span> means{" "}
          <i>the amount of charging event</i>.
        </div>
        <div>
          <span className="font-semibold">* mp</span> means{" "}
          <i>the actual max power demand</i>.
        </div>
        <div>
          <span className="font-semibold">* ec</span> means{" "}
          <i>the energy consumed</i>.
        </div>
      </section>
    </>
  );
};

export default ChargingInsights;
