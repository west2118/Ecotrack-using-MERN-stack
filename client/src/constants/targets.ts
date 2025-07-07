type Target = {
  value: string;
  label: string;
  kg: number; // Weekly CO₂ budget
};

export const targets: Target[] = [
  { value: "moderate", label: "Moderate (70kg CO₂/week)", kg: 70 },
  { value: "aggressive", label: "Aggressive (50kg CO₂/week)", kg: 50 },
  { value: "extreme", label: "Extreme (30kg CO₂/week)", kg: 30 },
];
