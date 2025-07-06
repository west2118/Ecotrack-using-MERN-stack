export const items = {
  clothing: 0.00043,
  electronics: 0.00075,
  furniture: 0.0005,
  groceries: 0.0004,
  books: 0.0003,
  misc: 0.00035,
} as const;

export type PurchaseCategory = keyof typeof items;
