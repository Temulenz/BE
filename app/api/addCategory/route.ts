import { NextRequest, NextResponse } from "next/server";
import {
  createCategory,
  deleteCategoryById,
  getAllCategories,
} from "../../../lib/services/category-service";

export async function GET() {
  const categories = await getAllCategories();
  return new NextResponse(JSON.stringify({ data: categories }), {
    status: 200,
  });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const id = body.id;
  if (!id) {
    return new NextResponse(JSON.stringify({ error: "ID is required" }), {
      status: 400,
    });
  }

  await deleteCategoryById(id);

  return new NextResponse(JSON.stringify({ message: "Category deleted" }), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  await createCategory(body.name);
  return new NextResponse(JSON.stringify({ message: "Category created" }), {
    status: 200,
  });
}
