import { WeaponCreator, WeaponFactoryCreator } from './types';

function Sword(this: WeaponCreator, damage: number) {
  this.damage = damage;
  this.type = 'Sword';
}

function Bow(this: WeaponCreator, damage: number) {
  this.damage = damage;
  this.type = 'Bow';
}

const AVAILABLE_TYPES: any = { Sword, Bow };

function WeaponFactory(this: WeaponFactoryCreator) {
  this.create = (damage, type) => new AVAILABLE_TYPES[type](damage);
}

function use(this: any) {
  console.log(`Used ${this.type} and did ${this.damage} damage`);
};

// Testing

const weaponFactory = new (WeaponFactory as any)();

const longSword = weaponFactory.create(25, 'Sword');
use.call(longSword);

const longBow = weaponFactory.create(100, 'Bow');
use.call(longBow);
