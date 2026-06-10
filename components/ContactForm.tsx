export function ContactForm() {
  return (
    <form className="form-panel" aria-disabled="true">
      <input className="hp" name="company" tabIndex={-1} autoComplete="off" />
      <div className="form-grid">
        <label>
          Name
          <input name="name" minLength={2} disabled />
        </label>
        <label>
          Email
          <input name="email" type="email" disabled />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" disabled />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={6} minLength={10} disabled />
      </label>
      <p className="form-error">Online contact forms are coming soon. Please contact Dante directly for now.</p>
      <button className="button button-red" type="button" disabled>
        Contact Directly
      </button>
    </form>
  );
}
