type Target = {
  value: string;
  label: string;
};

export const targets: Target[] = [
  { value: "moderate", label: "Moderate (10% reduction)" },
  { value: "aggressive", label: "Aggressive (20% reduction)" },
  { value: "extreme", label: "Extreme (30% reduction)" },
];
