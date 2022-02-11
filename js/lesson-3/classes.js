class User {
  constructor(hp, nickname) {
    this.hp = hp;
    this.nickname = nickname;
  }
}

class Human extends User {
  constructor(hp, nickname, mana) {
    super(hp, nickname);
    this.mana = mana;
  }

  hil() {
    return 'This hero has hil';
  }
}

class Orcs extends User {
  constructor(hp, nickname, damage, attack) {
    super(hp, nickname);
    this.damage = damage;
    this.attack = attack;
  }
}

class Warrior extends Orcs {
  constructor({ hp, nickname, damage, attack, ax }) {
    super(hp, nickname, damage, attack);
    this.ax = ax;
  }
}

class Assassin extends Orcs {
  constructor({ hp, nickname, damage, attack, blade }) {
    super(hp, nickname, damage, attack);
    this.blade = blade;
  }
}

class WhiteMag extends Human {
  constructor({ hp, nickname, mana, whiteMagic }) {
    super(hp, nickname, mana);
    this.whiteMagic = whiteMagic;
  }
}

class BlackMag extends Human {
  constructor({ hp, nickname, mana, blackMagic }) {
    super(hp, nickname, mana);
    this.blackMagic = blackMagic;
  }
}

const warrior = new Warrior({
  hp: 10,
  nickname: 'Warrior',
  damage: 'The damage of the Warrior',
  attack: 'The attack of the Warrior',
  ax: 'The ax of the Warrior',
});

const assassin = new Assassin({
  hp: 15,
  nickname: 'Assassin',
  damage: 'The damage of the Assassin',
  attack: 'The attack of the Assassin',
  blade: 'The blade of the Assassin',
});

const whiteMag = new WhiteMag({
  hp: 20,
  nickname: 'White Mag',
  mana: 'The mana of the White Mag',
  whiteMagic: 'The magic of the White Mag',
});

const blackMag = new BlackMag({
  hp: 25,
  nickname: 'Black Mag',
  mana: 'The mana of the Black Mag',
  blackMagic: 'The magic of the Black Mag',
});

const warriorRef = document.querySelector('.warrior');
const assassinRef = document.querySelector('.assassin');
const whiteMagRef = document.querySelector('.white-mag');
const blackMagRef = document.querySelector('.black-mag');

warriorRef.addEventListener('click', () => {
  console.log(warrior);
});
assassinRef.addEventListener('click', () => {
  console.log(assassin);
});
whiteMagRef.addEventListener('click', () => {
  console.log(whiteMag);
});
blackMagRef.addEventListener('click', () => {
  console.log(blackMag);
});
