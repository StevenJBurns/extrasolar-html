export class SolarSystem {
    constructor(args) {
        this.systemName = args.name ?? '';
        this.distanceFromEarth = args.distanceFromEarth ?? 0;
        this.stars = args.stars;
        this.planets = [];
    }
    ;
}
;
