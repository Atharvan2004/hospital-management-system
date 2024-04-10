import jwt from "jsonwebtoken";
import localStorage from "localStorage"

async function generateToken(user, role) {
  const token = await jwt.sign(
    { userId: user.userId, id: user._id, role: role },
    process.env.TOKEN_KEY,
    { expiresIn: 1000 * 60 * 60 * 6 }
  );
  console.log(token+" as")
  return token;
}

async function generateAdminToken(user, role) {
  const token = await jwt.sign(
    { userId: user.userId, id: user._id, role: "Admin" },
    process.env.TOKEN_KEY,
    { expiresIn: 1000 * 60 * 60 * 6 }
  );
  return token;
}

async function validateToken(req, res, next) {
  console.log(JSON.stringify(req.cookies))
  const accessToken = req.body.token;
  console.log(accessToken+" atoken")
  var validToken;
  if (accessToken == null) {
    res.status(400).json("user not authenticated");
  } else {
    try {
      validToken = await jwt.verify(accessToken, process.env.TOKEN_KEY);
      console.log(validToken);
      if (validToken) {
        req.authenticated = true;
        req.user = validToken;

        next();
      }
    } catch (error) {
      res.json("error " + error);
    }
  }
}

async function validateAdmin(req, res, next) {
  const accessToken = req.cookies["token"];
  var validToken;
  if (accessToken == null) {
    res.status(404).json("user not authenticated");
  } else {
    try {
      validToken = await jwt.verify(accessToken, process.env.TOKEN_KEY);
      if (validToken.role == "Admin") {
        console.log(validToken);
        if (validToken) {
          req.authenticated = true;
          req.user = validToken;

          next();
        }
      }
    } catch (error) {
      res.json("error " + error);
    }
  }
}

export { generateToken, generateAdminToken, validateToken, validateAdmin };
