export function getUnit(category: string): string {
  switch (category) {
    case "Transport":
      return "km";
    case "Foods":
      return "g";
    case "Purchases":
      return "USD";
    case "Energy Use":
      return "mwh";
    default:
      return "";
  }
}
