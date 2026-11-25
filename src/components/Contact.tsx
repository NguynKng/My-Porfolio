import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Item, Stagger } from "./motion";

const EMAIL = "nguynkhang2109@gmail.com";

const contacts = [
  { label: "LinkedIn", value: "linkedin.com/in/nguynkhang", href: "https://www.linkedin.com/in/nguynkhang/", icon: Linkedin },
  { label: "GitHub", value: "github.com/NguynKng", href: "https://github.com/NguynKng", icon: Github },
  { label: "Phone", value: "(+84) 934 690 473", href: "tel:+84934690473", icon: Phone },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy. My email is " + EMAIL);
    }
  };

  return (
    <section className="section contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-panel">
        <Stagger className="contact-inner" gap={0.08}>
          <Item as="p" className="eyebrow">Let's work together</Item>
          <Item as="h2" className="contact-title"><span id="contact-title">Have a role or a project in mind?<br /><span className="contact-title-muted">Let's build it.</span></span></Item>
          <Item as="p" className="contact-intro">I'm open to Fresher and Junior Full-stack or Backend Developer roles, freelance projects, or just a good conversation about tech.</Item>
          <Item className="contact-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary"><Mail size={17} />Send me an email</a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail} aria-live="polite">
              {copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "Copied!" : EMAIL}
            </button>
            <a href="/cv/NguyenHuuNguyenKhang_CV_FullstackDeveloper.pdf" download className="btn btn-ghost"><Download size={17} />CV</a>
          </Item>
          <Item className="contact-links">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                <span className="contact-icon"><Icon size={18} /></span>
                <span><small>{label}</small><strong>{value}</strong></span>
                <ArrowUpRight size={16} className="contact-arrow" />
              </a>
            ))}
          </Item>
          <Item as="p" className="contact-location"><MapPin size={15} />Based in Ho Chi Minh City, Vietnam · Open to on-site, hybrid, or remote</Item>
        </Stagger>
        </div>
      </div>
    </section>
  );
}
