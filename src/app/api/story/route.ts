import services from "@/services";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await services.story.getTopStories();
  return NextResponse.json(result);
}
