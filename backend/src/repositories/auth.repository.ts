import Auth from "../models/auth.model";

export async function findAuthById(id: string) {
  const auth = await Auth.findById(id);
  return auth;
}

export async function findAuth(login: string) {
  const auth = await Auth.findOne({ login });
  return auth;
}

export async function createAuth(login: string, password: string) {
  const existedAuth = await findAuth(login);

  if (existedAuth) {
    return null;
  }

  const auth = new Auth({ login, password });
  const savedAuth = await auth.save();

  return savedAuth;
}

export async function saveToken(id: string, token: string | null) {
  const auth = await findAuth(id);

  if (auth && auth.refreshToken !== token) {
    auth.refreshToken = token || undefined;
  }
}
