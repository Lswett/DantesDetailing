"use client";

import { useActionState } from "react";
import { submitBooking } from "@/lib/actions";
import type { BookingState } from "@/lib/validation";

const initialState: BookingState = { ok: false, message: "" };

export function BookingForm({
  services,
  selectedService,
  membershipInterest,
}: {
  services: string[];
  selectedService?: string;
  membershipInterest?: boolean;
}) {
  const [state, formAction, pending] = useActionState(submitBooking, initialState);

  return (
    <form action={formAction} className="form-panel">
      <input className="hp" name="company" tabIndex={-1} autoComplete="off" />
      <div className="form-grid">
        <label>
          Name
          <input name="name" required minLength={2} />
          <FieldError errors={state.fieldErrors?.name} />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
          <FieldError errors={state.fieldErrors?.email} />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required />
          <FieldError errors={state.fieldErrors?.phone} />
        </label>
        <label>
          Address or general location
          <input name="location" required />
          <FieldError errors={state.fieldErrors?.location} />
        </label>
        <label>
          Vehicle year/make/model
          <input name="vehicle" placeholder="2022 Ford F-150" required />
          <FieldError errors={state.fieldErrors?.vehicle} />
        </label>
        <label>
          Vehicle type
          <select name="vehicleType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="suv">SUV</option>
            <option value="classic">Classic</option>
            <option value="other">Other</option>
          </select>
          <FieldError errors={state.fieldErrors?.vehicleType} />
        </label>
        <label>
          Desired service
          <select name="desiredService" required defaultValue={selectedService ?? ""}>
            <option value="" disabled>
              Select service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError errors={state.fieldErrors?.desiredService} />
        </label>
        <label>
          Preferred date
          <input name="preferredDate" type="date" />
        </label>
        <label>
          Preferred time window
          <select name="preferredTimeWindow" required defaultValue="">
            <option value="" disabled>
              Select window
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Flexible</option>
          </select>
          <FieldError errors={state.fieldErrors?.preferredTimeWindow} />
        </label>
      </div>
      <label>
        Vehicle condition notes
        <textarea name="conditionNotes" rows={5} placeholder="Pet hair, stains, heavy road grime, oversized vehicle, or anything Dante should know." />
      </label>
      <label className="check-row">
        <input name="membershipInterest" type="checkbox" defaultChecked={membershipInterest} />
        I am interested in a monthly maintenance plan.
      </label>
      <label className="check-row">
        <input name="consentToContact" type="checkbox" required />
        I agree to be contacted by Dante&apos;s Detailing about this request.
      </label>
      {state.message ? <p className="form-error">{state.message}</p> : null}
      <button className="button button-red" type="submit" disabled={pending}>
        {pending ? "Sending..." : "Submit Booking Request"}
      </button>
    </form>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  return errors?.[0] ? <span className="field-error">{errors[0]}</span> : null;
}
