export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;
  isEvenRow: boolean;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean, isEvenRow: boolean) {
    this.name = name;
    this.type = type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
    this.isEvenRow = isEvenRow;
  }
  shouldShowWarning = function() {
    console.log(this.type.toLowerCase());
    return this.type.toLowerCase() === 'space debris';
  };
}
