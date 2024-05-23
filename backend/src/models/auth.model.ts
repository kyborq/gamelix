import { hash } from "bcrypt";
import { model, Schema } from "mongoose";

export interface IAuth {
  login: string;
  password: string;
  refreshToken?: string;
}

const authSchema = new Schema<IAuth>({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

authSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await hash(this.password, 10);
  }
  next();
});

const Auth = model("Auth", authSchema);

export default Auth;
