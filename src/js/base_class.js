export default class Character {
  constructor() {
    this.level = 1;
    this.health = 100;
    this.attack = 0;
    this.defence = 0;
    this.distance = 1;
    this.stoned = false;
  }

  set stoned(value) {
    if (value === 'stoned') {
      this.dope = true;
    }
  }

  set attack(distance) {
    this.distance = distance;
  }

  get attack() {
    let attack = this.attack * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }

    return Math.round(Math.max(attack, 0));
  }
}
