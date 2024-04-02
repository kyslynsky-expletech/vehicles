import { marquesModels } from "./data/vehicles";

const getModelByMarque = (marque) =>
  marquesModels[marque] || "Marque not found";

export { marquesModels, getModelByMarque };