import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    console.log("VERIFY SECRET:", process.env.JWT_SECRET);

    if (!token) {
      console.error("JWT VERIFY ERROR:", err.message);
      return res.status(401).json({ msg: "Authentication required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
    };

    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid or expired token" });
  }
};

// export const verifyToken = (req, res, next) => {
//   const token = req.cookies.token;

//   console.log("VERIFY SECRET:", process.env.JWT_SECRET);

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       console.error("JWT VERIFY ERROR:", err.message); //
//       return res.status(403).json({ msg: "Invalid token" });
//     }

//     req.user = user;
//     next();
//   });
// };
