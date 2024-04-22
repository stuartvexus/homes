// multiple users
export const usersProperties = {
  user_id: { type: "string" },
  email: { type: "string" },
  fullName: { type: "string" },
  
};
Object.freeze(usersProperties);

// single user
export const userProperties = {
  ...usersProperties,
  isAdmin:{type:"string"},
  properties: {
    type: "array"
  }
};
Object.freeze(userProperties);
