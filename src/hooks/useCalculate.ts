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

  const carArrivals = (data.carConsumption / 100) * 200;

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

    const result = carDistribution.map((carsInGroup, i) => {
      const carsPerPoint = Math.floor(carsInGroup / pointNums[i]); // Cars per point
      const remainder = carsInGroup % pointNums[i]; // Cars left over

      // Calculate power consumed for each point
      return Array(pointNums[i])
        .fill(carsPerPoint)
        .map((cars, index) => {
          const adjustedCars = index < remainder ? cars + 1 : cars; // Distribute remainder
          return {
            powerPerPoint: powerPerPoint[i],
            carsAssigned: adjustedCars,
            powerConsumed: adjustedCars * data.carConsumption,
          };
        });
    });

    // Flatten result to get point-by-point details
    return result.flat();
  };

  return {
    chargingEvents: chargingEvents,
    totalEnergy: totalEnergy,
    formatNumberWithCommas,
    chargingValueTable: calculatePowerDistribution(),
  };
};

export default useCalculate;
