import { Planet } from "../Planet/Planet";

export interface IStar {
  mass: number,
  radius: number,
  temperature: number,
  isBinary?: boolean,
  planets: Array<Planet>,
};
