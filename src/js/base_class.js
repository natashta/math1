export default class Character {
  constructor() {
    this.level = 1;
    this.health = 100;
    this.attack = 0;
    this.distance = 1;
    this.stoned = false;
  }

  get distance() {
    return this._distance;
  }

  set distance(prop) {
    this._distance = prop;
    return this.distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    if (value === 'stoned') {
      this._stoned = true;
    }
  }

  get attack() {
    let attack = this._attack * (100 - (this.distance - 1) * 10) / 10;

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(attack);
  }

  set attack(prop) {
    this._attack = prop;
    return this.attack;
  }
}
