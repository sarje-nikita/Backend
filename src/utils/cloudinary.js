import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// const CLOUDINARY_CLOUD_NAME = "dusjq6bl2";
// const CLOUDINARY_API_KEY = "365224646296243";
// const CLOUDINARY_API_SECRET = "HBH3TuuWjL2A2WZV5qrR2gZYE0";

cloudinary.config({
  cloud_name: "dusjq6bl2",
  api_key: "365224646296243",
  api_secret: "-HBH3TuuWjL2A2WZV5qrR2gZYE0",
});

const uploadOnCloudinary = async (localFilePath) => {
  console.log("Uploading file:", localFilePath);
  console.log("Cloudinary Config:", {
    cloud_name: cloudinary.config().cloud_name,
    api_key: cloudinary.config().api_key,
    api_secret: cloudinary.config().api_secret,
  });
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // fs.unlink(localFilePath)
    return response;
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
};

export { uploadOnCloudinary };
