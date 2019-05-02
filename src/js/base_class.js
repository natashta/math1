export default class Character {
  constructor(name) {
    this.name = name;
    this.stoned = false;
    this.attack = undefined;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (value === true) {
      this._stoned = true;
    }
  }

  get attack() {
    let attack = (100 - (this.distance - 1) * 10);

    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(attack);
  }

  set attack(prop) {
    this._attack = prop;
    return this.attack;
  }
}
