import { asyncHandler } from "../utils/asyncHandler.js";
import path from "path"; 

const registerUser = asyncHandler(async (req, res) => {

  const {username, email, password} = req.body;
  console.log("email :", email);
});

export { registerUser };
