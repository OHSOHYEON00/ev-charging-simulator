import { useDataContext } from "components/context/useDataContext";

const useCalculate = ({ runningHour = 24 }: { runningHour?: number }) => {
  const { data } = useDataContext();

  const formatNumberWithCommas = (number: number) => {
    return number.toLocaleString("en-US");
  };

  if (!data) {
    return { formatNumberWithCommas };
  }

  const chargeTime = data.chargingPower.map(
      (p) => data.carConsumption / p.value
    ),
    chargableCars = chargeTime
      .map((t, index) =>
        Math.floor((runningHour / t) * data.chargingPoints[index].value)
      )
      .reduce((a, b) => a + b);

  const carArrivals = (data.arrivalProbability / 100) * 200; // Calculate based on 200 vehicles when at 100%

  const chargingEvents = Math.min(carArrivals, chargableCars);
  const totalEnergy = chargingEvents * data.carConsumption;

  /** Charging value table */

  const calculatePowerDistribution = () => {
    const powerPerPoint = data.chargingPower.map((t) => t.value),
      pointNums = data.chargingPoints.map((p) => p.value);

    // Calculate total weight (for proportional distribution)
    const totalWeight = pointNums.reduce(
      (sum: number, count: number, i: number) => sum + count * powerPerPoint[i],
      0
    );

    // Distribute cars proportionally
    const carDistribution = pointNums.map((count, i) => {
      const groupWeight = count * powerPerPoint[i];
      return Math.round((groupWeight / totalWeight) * chargingEvents); // Cars per group
    });

    const result = carDistribution
      .map((carsInGroup, i) => {
        const carsPerPoint = Math.floor(carsInGroup / pointNums[i]); // Cars per point
        const remainder = carsInGroup % pointNums[i]; // Cars left over

        // Calculate power consumed for each point
        return Array(pointNums[i])
          .fill(carsPerPoint)
          .map((cars, index) => {
            const adjustedCars = index < remainder ? cars + 1 : cars; // Distribute remainder
            return {
              powerPerPoint: formatNumberWithCommas(powerPerPoint[i]),
              carsAssigned: formatNumberWithCommas(adjustedCars),
              powerConsumed: formatNumberWithCommas(
                adjustedCars * data.carConsumption
              ),
            };
          });
      })
      .flat();

    return result;
  };

  const pointWithPower = data.chargingPoints.map((p, index) => ({
    point: p.value,
    power: data.chargingPower[index].value,
  }));

  // Remove duplicated point which has same power
  const totalPointWithPower = pointWithPower.reduce(
    (acc: { power: number; point: number }[], current) => {
      const existing = acc.find((item) => item.power === current.power);
      if (existing) {
        existing.point += current.point;
      } else {
        acc.push({ power: current.power, point: current.point });
      }
      return acc;
    },
    []
  );

  /** Charging Insighes Table */
  interface IChartItem {
    name: string;
    ce: number; // amount of charging event
    mp: number; // actual max power demand
    ec: number; // energy consumed
  }

  const nameList = [
    {
      name: "daily",
      multi: 1,
    },
    {
      name: "weekly",
      multi: 7,
    },
    {
      name: "monthly",
      multi: 30,
    },
  ];

  const mp = totalPointWithPower.reduce(
    (acc, cur) => acc + cur.point * cur.power,
    0
  );

  const tableData: IChartItem[] = nameList.map(({ name, multi }) => {
    return {
      name,
      ce: chargingEvents * multi,
      mp: mp * multi,
      ec: totalEnergy * multi,
    };
  });

  return {
    chargingEvents: chargingEvents,
    totalEnergy: totalEnergy,
    formatNumberWithCommas,
    chargingValueTable: calculatePowerDistribution(),
    inputInfo: {
      totalPointWithPower,
      carConsumption: chargingEvents,
      arrivalMulti: carArrivals,
    },
    dailyPerformance: {
      chargingEvents,
      chargeTime: totalPointWithPower.map((p, i) => ({
        kw: p.power,
        time: (data.carConsumption / p.power).toFixed(2),
      })),
      totalEnergy: formatNumberWithCommas(totalEnergy),
    },
    tableData,
  };
};

export default useCalculate;
