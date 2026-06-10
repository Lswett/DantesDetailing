import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse({ ...body, consentToContact: body?.consentToContact ? "on" : undefined });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid booking request", details: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const service = await prisma.service.findFirst({
    where: { name: parsed.data.desiredService },
    select: { id: true },
  });

  const booking = await prisma.bookingRequest.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      location: parsed.data.location,
      vehicle: parsed.data.vehicle,
      vehicleType: parsed.data.vehicleType,
      desiredService: parsed.data.desiredService,
      serviceId: service?.id,
      conditionNotes: parsed.data.conditionNotes || null,
      preferredDate: parsed.data.preferredDate ? new Date(`${parsed.data.preferredDate}T12:00:00`) : null,
      preferredTimeWindow: parsed.data.preferredTimeWindow,
      membershipInterest: Boolean(parsed.data.membershipInterest),
      consentToContact: true,
    },
  });

  return NextResponse.json({ ok: true, id: booking.id }, { status: 201 });
}
