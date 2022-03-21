import { WeaponCreator, WeaponFactoryCreator } from '../types';

function Sword(this: WeaponCreator, damage: number) {
  this.damage = damage;
  this.type = 'Sword';
}

function Bow(this: WeaponCreator, damage: number) {
  this.damage = damage;
  this.type = 'Bow';
}

function WeaponFactory(this: WeaponFactoryCreator) {
  this.create = (damage: number, type: number) => {
    switch(type)
    {
      case 1:
        return new (Sword as any)(damage);
      case 2:
        return new (Bow as any)(damage);
      default:
        return null;
    }
  }
}

function use(this: any) {
  console.log('Used ' + this.type + ' and did ' + this.damage + ' damage');
}

// Testing

const weaponFactory = new (WeaponFactory as any)();

const longSword = weaponFactory.create(25, 1);
use.call(longSword);

const longBow = weaponFactory.create(100, 2);
use.call(longBow);
