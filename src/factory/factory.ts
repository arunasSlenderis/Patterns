import { WeaponType } from './types';

export class Weapon {
  public type: WeaponType = 'Sword';

  constructor(public damage: number) {
    this.damage = damage;
  }

  public use() {
    console.log(`Used ${this.type} and did ${this.damage} damage`);
  }
}

export class Sword extends Weapon {
  public override type: WeaponType;
  
  constructor(damage: number) {
    super(damage);
    this.type = 'Sword';
  }
}

export class Bow extends Weapon {
  public override type: WeaponType;

  constructor(damage: number) {
    super(damage);
    this.type = 'Bow';
  }
}

const AVAILABLE_TYPES = { Sword, Bow };

export class WeaponFactory {
  create(damage: number, type: WeaponType) {
    return new AVAILABLE_TYPES[type](damage);
  }
}
