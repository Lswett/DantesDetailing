import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "asc" } });
  return NextResponse.json(testimonials);
}
