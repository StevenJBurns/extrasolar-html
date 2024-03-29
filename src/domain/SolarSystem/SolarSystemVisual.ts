import { PlanetVisual } from "../Planet/PlanetVisual";
import { StarVisual } from "../Star/StarVisual";

type NewSolarSystemArgs = {
  name: string;
  stars: Array<StarVisual>;
  planets: Array<PlanetVisual>;
  distanceFromEarth: number;
};

export class SolarSystemVisual {
  systemName: string;
  stars: Array<StarVisual>;
  planets: Array<PlanetVisual>;
  distanceFromEarth: number;

  constructor(args: NewSolarSystemArgs) {
    this.systemName = args.name ?? '';
    this.distanceFromEarth = args.distanceFromEarth ?? 0;
    this.stars = args.stars;
    this.planets = [];
  };
};
