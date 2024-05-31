import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { connectDB } from "@/app/config/db";
import Asset from "@/models/Asset";
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECRET,
});

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const file = data.get("file") as File;
    const category = data.get("category");
    if (!file) {
      return NextResponse.json(
        {
          error: "No image found",
          success: false,
        },
        { status: 404 }
      );
    }
    const byteData = await file.arrayBuffer();
    const buffer = new Uint8Array(byteData);
    const imgPath: CloudinaryUploadResult = await new Promise(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "lms" }, function (error, result) {
            if (error) {
              reject(error);
              return NextResponse.json(
                {
                  error: `Error while uplading file: ${error.message}`,
                  success: false,
                },
                { status: 400 }
              );
            }
            resolve(result as CloudinaryUploadResult);
          })
          .end(buffer);
      }
    );
    const newAsset = await new Asset({
      publicId: imgPath.public_id,
      url: imgPath.secure_url,
      category,
    });
    await newAsset.save();

    return NextResponse.json(
      {
        message: "Image Uploaded Successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { id } = await reqBody;
    const asset = await Asset.findOne({ _id: id });
    await cloudinary.uploader.destroy(asset.publicId);
    await Asset.deleteOne({ _id: id });
    return NextResponse.json(
      {
        message: "Image deleted successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
};
