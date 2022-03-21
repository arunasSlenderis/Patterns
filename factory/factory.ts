import { WeaponType } from '../types';

class Weapon {
  public type!: WeaponType;

  constructor(public damage: number) {
    this.damage = damage;
  }

  public use() {
    console.log(`Used ${this.type} and did ${this.damage} damage`);
  }
}

class Sword extends Weapon {
  public override type: WeaponType;
  
  constructor(damage: number) {
    super(damage);
    this.type = 'Sword';
  }
}

class Bow extends Weapon {
  public override type: WeaponType;

  constructor(damage: number) {
    super(damage);
    this.type = 'Bow';
  }
}

const AVAILABLE_TYPES = { Sword, Bow };

class WeaponFactory {
  create(damage: number, type: WeaponType) {
    return new AVAILABLE_TYPES[type](damage);
  }
}

// Testing

const weaponFactory = new WeaponFactory();

const longSword = weaponFactory.create(25, 'Sword');
longSword.use();

const longBow = weaponFactory.create(100, 'Bow');
longBow.use();
