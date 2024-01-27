import { asyncHandler } from "../utils/asyncHandler";
import path from "path"; 

const registerUser = asyncHandler(async (req, res) => {
  res.sendfile(
    path.join(__dirname, "..", "..", "public", "temp", "index.html")
  );
  // const {username, email, password} = req.body;
  // console.log("email :", email);
});

export { registerUser };
