class Monster {
  constructor(name, ascii, description, hint, health, defense, attack) {
    this.name = name;
    this.ascii = ascii;
    this.description = description;
    this.hint = hint;
    this.health = health;
    this.defense = defense;
    this.attack = attack;
  }
  startAttack() {
    console.log("Attack!");
  }
  printStats() {
    console.log(
      `Monster - Health: ${this.health}, Defense: ${this.defense}, Attack: ${this.attack}`
    );
  }
  takeDamage(target, damage) {
    target.health -= damage;
    console.log("Ouch!");
    return target.health;
  }
}

export default Monster;
