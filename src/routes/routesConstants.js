export const baseApiEndpoints = {
  baseUrl: "/api",
  login: "login",
  publicEstates: "publicEstates"
}

export const routerEndpoints = {
  login: `${baseApiEndpoints.baseUrl}/${baseApiEndpoints.login}`,
  publicEstates: `${baseApiEndpoints.baseUrl}/${baseApiEndpoints.publicEstates}`
}

export const loginEndpoints = {
  getAllUsers: "/getAllUsers",
  verifyLogin: "/verifyLogin",
  createUser: "/createUser",
}

export const publicEstateEndpoints = {
  getAllPublicEstates: "/",
}