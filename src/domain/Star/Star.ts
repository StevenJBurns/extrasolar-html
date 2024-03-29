import { IStar } from './IStar';

export class Star {
  private constructor(private readonly args: IStar) {
    // For binaryDraw() method only !!!
    // this.thetaA = (Math.random() * Math.PI) + Math.PI;
    // this.thetaB = this.thetaA - Math.PI;
    // this.dtheta = 0.0075;

    // this.polarRadiusA = 24;
    // this.polarRadiusB = 32;
    // this.xA, this.yA, this.xB, this.yB;
  };

  static Create(args: IStar) {
    return new Star(args);
  };

  get Properies(): IStar {
    return {
      mass: this.args.mass,
      radius: this.args.radius,
      temperature: this.args.temperature,
      planets: [],
    };
  };
};
