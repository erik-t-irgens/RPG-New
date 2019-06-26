// Backend logic with exports, functions, constructors, etc.
export function CharacterBook (){
  this.characters = []
}

CharacterBook.prototype.addCharacter = function(character) {
  this.characters.push(character);
}

export function Character(name, health, level, experience, strength, defence, presence, resistance){
  this.name = name,
  this.health = health,
  this.level = level,
  this.experience = experience,
  this.strength = strength,
  this.defence = defence,
  this.presence = presence,
  this.resistance = resistance
}

// Track player health and XP on progress bars

export let playerHealth = document.getElementById("playerHealthDisplay");
playerHealth.value = 100;
export let playerXP = document.getElementById("playerXPDisplay");
playerXP.value = 0;



function Enemy (name, health, level, strength, defence, presence, resistance){
  this.name = name,
  this.health = health,
  this.level = level,
  this.strength = strength,
  this.defence = defence,
  this.presence = presence,
  this.resistance = resistance
}

//Enemy types
var pawnPhysical = new Enemy (
  "pawn",
  20,
  1,
  2,
  2,
  1,
  1)

var pawnMagical = new Enemy (
  "pawn",
  20,
  1,
  1,
  1,
  2,
  2)

var knight = new Enemy (
  "knight",
  70,
  2,
  2,
  3,
  1,
  2)

var rook = new Enemy (
  "rook",
  50,
  2,
  2,
  2,
  3,
  3)

var queen = new Enemy (
  "queen",
  100,
  3,
  2,
  3,
  1,
  2)

var boss = new Enemy (
  "boss",
  200,
  4,
  5,
  5,
  5,
  5)




// Creates original pool of attributes for player creation!
export var attributeInformation = {
  attributePool: 10,
  strengthTotal: 0,
  defenceTotal: 0,
  presenceTotal: 0,
  resistanceTotal: 0
}

Character.prototype.levelUp = function () {
  if (this.experience >= 100) {
    this.level = this.level + 1,
    this.experience = this.experience - 100
    playerXP.value = 0 + this.experience
  }
}
//Make sure to apply to enemy objects
Enemy.prototype.battleLoss = function () {
  if (this.health <= 0) {
    if (this.level === 1) {
      character.experience += 10
    } else if (this.level === 2) {
      character.experience += 20
    } else if (this.level === 3) {
      character.experience += 40
    } else if (this.level === 4) {
      character.experience += 80
    }
  }
}
