export enum EFormInput {
  "chargingPoints" = "chargingPoints",
  "arrivalProbability" = "arrivalProbability",
  "carConsumption" = "carConsumption",
  "chargingPower" = "chargingPower",
}

export type IFormInput = {
  [key in EFormInput]: number;
};
