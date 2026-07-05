import type { SiteContent } from "../../types/site";
import { ContactPanel } from "../ui/ContactPanel";
import { SectionHeading } from "../ui/SectionHeading";

type ContactSectionProps = {
  content: SiteContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section className="section-band contact" id="contact">
      <div className="section-grid">
        <SectionHeading eyebrow={content.contact.eyebrow} title={content.contact.title} body={content.contact.body} />
        <ContactPanel content={content} />
      </div>
    </section>
  );
}
