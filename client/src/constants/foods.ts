export const foods = {
  beef: 6.0,
  lamb: 2.4,
  cheese: 2.1,
  pork: 0.7,
  chicken: 0.6,
  fish: 0.5,
  eggs: 0.45,
  rice: 0.4,
  milk: 0.32,
  tofu: 0.2,
  beans: 0.09,
  lentils: 0.09,
  vegetables: 0.05,
  fruits: 0.04,
  potatoes: 0.03,
  nuts: 0.04,
  bread: 0.11,
  pasta: 0.13,
} as const;

export type FoodType = keyof typeof foods;
