export type WeaponType = 'Sword' | 'Bow';

export type WeaponCreator = {
  damage: number;
  type: WeaponType;
};

export type WeaponFactoryCreator = {
  create: (damage: number, type: number) => any;
}
