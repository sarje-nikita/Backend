import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/users.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import{ApiResponse} from "../utils/ApiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  if (fullName === "" || email === "" || password === "" || username === "") {
    throw new ApiError(408, "all feilds requird");
  }
  const existinguser = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (existinguser) {
    throw new ApiError(409, "user with these username or email allready exist");
  }
  const avatarLocalPath = req.files ? avatar[0]?.path : null;
  const coverImageLocalPath = req.files ? coverImage[0]?.path : null;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "avatar file uploading file");
  }
  User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowercase(),
  })
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  if(!createdUser){
    throw new ApiError(500,"something went wrong while registernig the user")
  }
  return res.status(201).json(
    new ApiResponse(201,createdUser,"User registered successfully")
  )
});

const userInfromation = asyncHandler(async (req, res) => {
  res.status(200).json({
    id: 2,
    name: "aniket wagh",
    email: "waniket48@gmail.com",
  });
});
const myInfromation = asyncHandler(async (req, res) => {
  res.status(200).json({
    id: 3,
    name: "aniket wagh",
    email: "waniket2000@gmail.com",
  });
});
export { registerUser, userInfromation, myInfromation };
