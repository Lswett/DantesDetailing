import { z } from "zod";

const honeypot = z.string().max(0, "Spam protection failed").optional();

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(10, "Tell us how we can help").max(1200),
  company: honeypot,
});

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a phone number").max(30),
  location: z.string().trim().min(3, "Enter your address or area").max(160),
  vehicle: z.string().trim().min(3, "Enter year, make, and model").max(120),
  vehicleType: z.enum(["car", "truck", "suv", "classic", "other"]),
  desiredService: z.string().trim().min(2, "Choose a service").max(80),
  conditionNotes: z.string().trim().max(1200).optional(),
  preferredDate: z.string().trim().optional(),
  preferredTimeWindow: z.string().trim().min(2, "Choose a time window").max(80),
  membershipInterest: z.coerce.boolean().optional(),
  consentToContact: z.literal("on", {
    error: "Consent is required so Dante's Detailing can respond.",
  }),
  company: honeypot,
});

export type BookingState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};
