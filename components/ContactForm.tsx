"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions";
import type { BookingState } from "@/lib/validation";

const initialState: BookingState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

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
          <input name="phone" type="tel" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={6} required minLength={10} />
        <FieldError errors={state.fieldErrors?.message} />
      </label>
      {state.message ? <p className="form-error">{state.message}</p> : null}
      <button className="button button-red" type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  return errors?.[0] ? <span className="field-error">{errors[0]}</span> : null;
}
