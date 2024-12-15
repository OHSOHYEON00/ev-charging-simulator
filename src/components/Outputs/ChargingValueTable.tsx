import useCalculate from "hooks/useCalculate";
import React from "react";

const ChargingValueTable = () => {
  const { chargingValueTable } = useCalculate({});
  console.log(chargingValueTable);

  if (!chargingValueTable) {
    return <></>;
  }

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left border-b">Charging Point</th>
            <th className="px-6 py-3 text-left border-b">
              Charging Power (kW)
            </th>
            <th className="px-6 py-3 text-left border-b">
              Number of Vehicles Charged
            </th>
            <th className="px-6 py-3 text-left border-b">Energy Used (kW)</th>
          </tr>
        </thead>
        <tbody>
          {/* {tableData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{row.chargingPoint}</td>
              <td className="px-6 py-4 border-b">{row.chargingPower}</td>
              <td className="px-6 py-4 border-b">{row.vehiclesCharged}</td>
              <td className="px-6 py-4 border-b">{row.energyUsed}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default ChargingValueTable;
