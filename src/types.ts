export enum EFormInput {
  "chargingPoints" = "chargingPoints",
  "arrivalProbability" = "arrivalProbability",
  "carConsumption" = "carConsumption",
  "chargingPower" = "chargingPower",
}

export enum EFormKeyName {
  "chargingPoints" = "Charge point",
  "arrivalProbability" = "Arrival Probability Multiplier",
  "carConsumption" = "Car Consumption",
  "chargingPower" = "Charging power",
}

export type IFormInputKeys =
  | keyof IFormInput
  | `chargingPoints.${number}` // chargingPoints 배열의 항목
  | `chargingPoints.${number}.value`
  | `chargingPoints.${number}.id`
  | `chargingPower.${number}` // chargingPower 배열의 항목
  | `chargingPower.${number}.value`
  | `chargingPower.${number}.id`;

export type IFormInput = {
  chargingPoints: Array<TFormDynamicInput>;
  arrivalProbability: number;
  carConsumption: number;
  chargingPower: Array<TFormDynamicInput>;
};

export const DEFAULT_POWER = 11;

export interface TFormDynamicInput {
  id: number;
  value: number;
}
