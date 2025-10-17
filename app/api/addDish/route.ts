import { NextRequest, NextResponse } from "next/server";
import { uploadImageToCloudinary } from "@/lib/utils/uploadImage";
import {
  createFood,
  deleteFoodById,
  getAllFoods,
} from "@/lib/services/food-service";

export async function GET() {
  console.log("HEllo");
  const result = await getAllFoods();
  return NextResponse.json({ data: result });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  // Extract food fields from formData
  const name = formData.get("name") as string;
  const ingredients = formData.get("ingredients") as string;
  const price = formData.get("price") as string;
  const image = formData.get("image") as File;
  const categoryId = formData.get("categoryId") as string;

  const uploadedUrl = await uploadImageToCloudinary(image);

  console.log("CATEGORY IDDD", categoryId);

  const result = await createFood(
    name,
    ingredients,
    Number(price),
    categoryId,
    uploadedUrl
  );

  if (result) {
    return NextResponse.json(
      { message: "Food item received successfully" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Food Failed to create" },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const id = body.id;
  if (!id) {
    return new NextResponse(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  await deleteFoodById(id);

  return new NextResponse(JSON.stringify({ message: "Food deleted" }), {
    status: 200,
  });
}
