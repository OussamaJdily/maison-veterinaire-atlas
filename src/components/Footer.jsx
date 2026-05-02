import { motion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

function scrollToSection(id) {
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Footer({ brand, content, navigation }) {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
    { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedInIcon },
  ];

  return (
    <footer className="border-t border-[var(--line-soft)] py-10">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-[var(--text-2)]">Atlas</p>
            <h2 className="mt-3 text-2xl font-semibold">{brand}</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-2)]">
              {content.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">{content.linksTitle}</p>
            <div className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-start text-sm text-[var(--text-2)] hover:text-[var(--text-1)]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">{content.contactTitle}</p>
            <div className="mt-4 space-y-4 text-sm text-[var(--text-2)]">
              <div className="flex items-center gap-3">
                <LocationIcon className="h-4 w-4 text-[var(--green-1)]" />
                <span>{content.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 text-[var(--green-1)]" />
                <span>{content.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="h-4 w-4 text-[var(--green-1)]" />
                <span>{content.email}</span>
              </div>
            </div>

            <p className="mt-6 text-sm font-semibold">{content.socialTitle}</p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-soft)] bg-[var(--surface-2)] text-[var(--text-2)] hover:-translate-y-1 hover:text-[var(--green-1)]"
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line-soft)] pt-6 text-sm text-[var(--text-2)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} {brand}. {content.rights}
          </p>
          <p>{content.signature}</p>
        </div>
      </div>
    </footer>
  );
}
