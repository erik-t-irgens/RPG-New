// Backend logic with exports, functions, constructors, etc.
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

export var attributeInformation = {
  attributePool: 10,
  strengthTotal: 0,
  defenceTotal: 0,
  presenceTotal: 0,
  resistanceTotal: 0
}
