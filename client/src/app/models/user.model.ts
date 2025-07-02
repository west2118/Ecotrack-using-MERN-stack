import mongoose, { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    country: { type: String },
    goal: { type: String },
    target: { type: String },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
