import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  name: { type: String, requred: true },
  email: { type: String, requred: true },
  gender: { type: String, requred: true },
  address: {
    street: { type: String, requred: true },
    city: { type: String, requred: true },
  },
  phone: { type: String, requred: true },
});

dataSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

export default mongoose.model("data", dataSchema);
