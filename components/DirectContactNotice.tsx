import { Mail, MapPin, Phone } from "lucide-react";
import { siteSettings } from "@/lib/site-settings";

export function DirectContactNotice() {
  return (
    <aside className="direct-contact" id="direct-contact">
      <p className="eyebrow">Direct Contact</p>
      <h2>Online forms are coming soon.</h2>
      <p>
        Online booking and contact forms are coming soon. For now, please contact Dante directly using the information below.
      </p>
      <div className="direct-contact-grid">
        <a href={`tel:${siteSettings.phone.replace(/[^0-9]/g, "")}`}>
          <Phone size={20} />
          <span>
            <strong>Phone</strong>
            {siteSettings.phone}
          </span>
        </a>
        <a href={`mailto:${siteSettings.email}`}>
          <Mail size={20} />
          <span>
            <strong>Email</strong>
            {siteSettings.email}
          </span>
        </a>
        <div>
          <MapPin size={20} />
          <span>
            <strong>Service Area</strong>
            {siteSettings.serviceArea}
          </span>
        </div>
      </div>
    </aside>
  );
}
