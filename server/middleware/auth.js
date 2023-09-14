import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
        if (error) {
          res.status(400).json({ message: "Token is not valid" });
        }
        req.user = data;
        console.log(data);
        next();
      });
    } else {
      res.status(400).json({ message: "Token is not valid" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
