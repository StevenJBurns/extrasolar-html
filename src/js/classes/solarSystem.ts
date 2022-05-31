import { Planet } from "./planet.js";
import { Star } from "./star.js";

type NewSolarSystemArgs = {
  name: string;
  stars: Array<Star>;
  planets: Array<Planet>;
  distanceFromEarth: number;
};

export class SolarSystem {
  systemName: string;
  stars: Array<Star>;
  planets: Array<Planet>;
  distanceFromEarth: number;

  constructor(args: NewSolarSystemArgs) {
    this.systemName = args.name ?? '';
    this.distanceFromEarth = args.distanceFromEarth ?? 0;
    this.stars = args.stars;
    this.planets = [];
  };
};
