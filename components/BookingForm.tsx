export function BookingForm({
  services,
  selectedService,
  membershipInterest,
}: {
  services: string[];
  selectedService?: string;
  membershipInterest?: boolean;
}) {
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
        <label>
          Address or general location
          <input name="location" disabled />
        </label>
        <label>
          Vehicle year/make/model
          <input name="vehicle" placeholder="2022 Ford F-150" disabled />
        </label>
        <label>
          Vehicle type
          <select name="vehicleType" defaultValue="" disabled>
            <option value="" disabled>
              Select one
            </option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="suv">SUV</option>
            <option value="classic">Classic</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Desired service
          <select name="desiredService" defaultValue={selectedService ?? ""} disabled>
            <option value="" disabled>
              Select service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preferred date
          <input name="preferredDate" type="date" disabled />
        </label>
        <label>
          Preferred time window
          <select name="preferredTimeWindow" defaultValue="" disabled>
            <option value="" disabled>
              Select window
            </option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Flexible</option>
          </select>
        </label>
      </div>
      <label>
        Vehicle condition notes
        <textarea name="conditionNotes" rows={5} placeholder="Pet hair, stains, heavy road grime, oversized vehicle, or anything Dante should know." disabled />
      </label>
      <label className="check-row">
        <input name="membershipInterest" type="checkbox" defaultChecked={membershipInterest} disabled />
        I am interested in a monthly maintenance plan.
      </label>
      <label className="check-row">
        <input name="consentToContact" type="checkbox" disabled />
        I agree to be contacted by Dante&apos;s Detailing about this request.
      </label>
      <p className="form-error">Online booking is coming soon. Please use the direct contact information above for now.</p>
      <button className="button button-red" type="button" disabled>
        Coming Soon
      </button>
    </form>
  );
}
