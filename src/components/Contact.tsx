import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contacts = [
  { label: "Email", value: "nguynkhang2109@gmail.com", href: "mailto:nguynkhang2109@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/nguynkhang", href: "https://www.linkedin.com/in/nguynkhang/", icon: Linkedin },
  { label: "GitHub", value: "github.com/NguynKng", href: "https://github.com/NguynKng", icon: Github },
  { label: "Phone", value: "(+84) 934690473", href: "tel:+84934690473", icon: Phone },
];
export default function Contact() {
  return (
    <section className="contact-field section-padding">
      <div className="section-shell">
        <div className="contact-heading">
          <div><p className="eyebrow">Let's work together</p><h2 className="section-title">Have an interesting project in mind?</h2><p className="contact-intro">I'm open to Fresher and Junior Full-stack Developer opportunities,<br className="hidden sm:block" /> interesting projects, or a conversation about technology.</p></div>
          <div className="contact-action"><a href="mailto:nguynkhang2109@gmail.com" className="button-dark">Contact Me <ArrowRight size={17} /></a><p className="font-hand">Let's build something<br />great together!</p></div>
        </div>
        <div className="contact-links">{contacts.map(({ label, value, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><Icon size={21} /><span><small>{label}</small><strong>{value}</strong></span></a>)}</div>
        <p className="contact-location"><MapPin size={16} />Ho Chi Minh City, Vietnam</p>
      </div>
    </section>
  );
}
