import { Planet } from "./planet";

interface NewStarArgs {
  mass: number,
  radius: number,
  temperature: number,
  isBinary: boolean,
  planets: Array<Planet>,
};

export class Star {
  mass: number;
  radius: number;
  temperature: number;
  isBinary: boolean;
  planets: Array<Planet>;

  constructor(args: NewStarArgs) {
    this.mass = args.mass || 0;
    this.radius = args.radius || 0;
    this.temperature = args.temperature;
    this.isBinary = args.isBinary;
    this.planets = args.planets;

    // For binaryDraw() method only !!!
    // this.thetaA = (Math.random() * Math.PI) + Math.PI;
    // this.thetaB = this.thetaA - Math.PI;
    // this.dtheta = 0.0075;

    // this.polarRadiusA = 24;
    // this.polarRadiusB = 32;
    // this.xA, this.yA, this.xB, this.yB;
  }
}