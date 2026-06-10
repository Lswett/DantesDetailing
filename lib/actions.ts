"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { bookingSchema, contactSchema, type BookingState } from "@/lib/validation";

function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function submitBooking(
  _previousState: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const parsed = bookingSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the highlighted booking fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const preferredDate = parsed.data.preferredDate
    ? new Date(`${parsed.data.preferredDate}T12:00:00`)
    : null;

  const service = await prisma.service.findFirst({
    where: { name: parsed.data.desiredService },
    select: { id: true },
  });

  await prisma.bookingRequest.create({
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
      preferredDate,
      preferredTimeWindow: parsed.data.preferredTimeWindow,
      membershipInterest: Boolean(parsed.data.membershipInterest),
      consentToContact: true,
    },
  });

  redirect("/book?submitted=1");
}

export async function submitContact(
  _previousState: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const parsed = contactSchema.safeParse({
    name: formValue(formData, "name"),
    email: formValue(formData, "email"),
    phone: formValue(formData, "phone"),
    message: formValue(formData, "message"),
    company: formValue(formData, "company"),
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the highlighted contact fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  await prisma.contactMessage.create({
    data: {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      message: parsed.data.message,
    },
  });

  redirect("/contact?submitted=1");
}
