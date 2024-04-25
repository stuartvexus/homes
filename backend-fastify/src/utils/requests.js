export const authBearerToken = function (request) {
  try{
    const authorization = request.headers.authorization;
    console.log("auth",authorization)
    return authorization.split(" ")[1];
  }catch(e){
    console.log(e)
    return null
  }
};
