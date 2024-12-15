import useCalculate from "hooks/useCalculate";
import React from "react";

const ChargingValueTable = () => {
  const { chargingValueTable, formatNumberWithCommas } = useCalculate({});
  console.log(chargingValueTable);

  if (!chargingValueTable) {
    return <></>;
  }

  const totalAssignedCar = chargingValueTable
    .map((v) => +v.carsAssigned)
    .reduce((a, v) => a + v);

  const totalConsumedPower = chargingValueTable
    .map((v) => +v.powerConsumed)
    .reduce((a, v) => a + v);

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100 md:text-base text-sm">
          <tr>
            <th className=" py-3 text-center border-b">Point</th>

            <th className=" py-3 text-center border-b">
              Charging Point Power (kW)
            </th>

            <th className=" py-3 text-center border-b">Cars per Point</th>
            <th className=" py-3 text-center border-b">
              Energy Used (kW) per Point
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {chargingValueTable.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">Point {index + 1}</td>
              <td className="px-6 py-4 border-b">{row.powerPerPoint} kW</td>
              <td className="px-6 py-4 border-b">{row.carsAssigned}</td>
              <td className="px-6 py-4 border-b">{row.powerConsumed} kW</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td>{formatNumberWithCommas(totalAssignedCar)}</td>
            <td>{formatNumberWithCommas(totalConsumedPower)} kW</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChargingValueTable;
