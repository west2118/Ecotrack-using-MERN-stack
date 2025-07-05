import { model, models, Schema } from "mongoose";

const ActSchema = new Schema(
  {
    userUid: { type: String, required: true },
    category: { type: String, required: true },
    activity: { type: String, required: true },
    details: { type: String, required: true },
    CO2: { type: Number, required: true },
    note: { type: String, required: true },
  },
  { timestamps: true }
);

const Act = models.Act || model("Act", ActSchema);

export default Act;
