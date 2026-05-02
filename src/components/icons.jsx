const sharedProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.7,
};

export function BrandMark({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 6c-3.9 0-7 3.1-7 7 0 2.2 1 4.2 2.5 5.5-5.8 1.8-10 7.2-10 13.8C9.5 38 15.5 43 24 43s14.5-5 14.5-10.7c0-6.6-4.2-12-10-13.8A6.99 6.99 0 0 0 31 13c0-3.9-3.1-7-7-7Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path {...sharedProps} d="M24 8c-3.3 0-6 2.7-6 6 0 2.1 1.1 3.9 2.8 4.9" />
      <path {...sharedProps} d="M24 8c3.3 0 6 2.7 6 6 0 2.1-1.1 3.9-2.8 4.9" />
      <path
        {...sharedProps}
        d="M18.5 21.5c-4.9 1.6-8.5 5.8-8.5 10.7C10 37.1 16 41 24 41s14-3.9 14-8.8c0-4.9-3.6-9.1-8.5-10.7"
      />
      <path {...sharedProps} d="M24 22v10" />
      <path {...sharedProps} d="M19 27h10" />
    </svg>
  );
}

export function MenuIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M5 12h14" />
      <path {...sharedProps} d="m13 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M19 12H5" />
      <path {...sharedProps} d="m11 5-7 7 7 7" />
    </svg>
  );
}

export function SunIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...sharedProps} cx="12" cy="12" r="4" />
      <path {...sharedProps} d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function MoonIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...sharedProps}
        d="M20 15.5A8.5 8.5 0 0 1 8.5 4a8.5 8.5 0 1 0 11.5 11.5Z"
      />
    </svg>
  );
}

export function ConsultationIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M11 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4" />
      <path {...sharedProps} d="M15 4h5v5" />
      <path {...sharedProps} d="m10 14 10-10" />
      <path {...sharedProps} d="M10 8v6h6" />
    </svg>
  );
}

export function VaccinationIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="m4 17 3-3 7-7 3 3-7 7-3 3H4v-3Z" />
      <path {...sharedProps} d="m13 8 3 3" />
      <path {...sharedProps} d="M17 4h3v3" />
    </svg>
  );
}

export function SurgeryIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="m5 6 5 5" />
      <path {...sharedProps} d="m8 3 3 3-5 5a2 2 0 0 1-3-3l5-5Z" />
      <path {...sharedProps} d="m13 14 8 8" />
      <path {...sharedProps} d="m14 9 7 7-2 2-7-7" />
    </svg>
  );
}

export function EmergencyIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function ImagingIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...sharedProps} x="3" y="5" width="18" height="14" rx="3" />
      <path {...sharedProps} d="m7 15 3-3 2 2 3-4 2 2" />
      <circle {...sharedProps} cx="9" cy="9" r="1.2" />
    </svg>
  );
}

export function DentalIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...sharedProps}
        d="M8.3 4.5C5.8 4.5 4 6.4 4 9c0 3.6 2.5 10.5 4.4 10.5 1.2 0 1-3.8 2.8-3.8s1.6 3.8 2.8 3.8c1.9 0 4.4-6.9 4.4-10.5 0-2.6-1.8-4.5-4.3-4.5-1.1 0-1.7.5-2.1.8-.4.3-.7.5-1 .5s-.6-.2-1-.5c-.4-.3-1-.8-2.1-.8Z"
      />
    </svg>
  );
}

export function HeartPulseIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
      <path {...sharedProps} d="M7 12h2l1.2-2.2 2 4.4 1.4-2.2H17" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M12 3 5 6v5c0 5 3.4 8.8 7 10 3.6-1.2 7-5 7-10V6l-7-3Z" />
      <path {...sharedProps} d="m9.5 12 1.7 1.7 3.3-3.7" />
    </svg>
  );
}

export function StarIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6-5.3-2.8L6.7 20l1-6L3.3 9.4l6-.9L12 3Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function QuoteIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M9.5 7A5.5 5.5 0 0 0 4 12.5V17h6v-4H7.3A3.7 3.7 0 0 1 11 9.3V7h-1.5Z" />
      <path {...sharedProps} d="M19.5 7A5.5 5.5 0 0 0 14 12.5V17h6v-4h-2.7A3.7 3.7 0 0 1 21 9.3V7h-1.5Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...sharedProps}
        d="M6.6 3.5h2.8l1.3 5-2 1.8a16 16 0 0 0 5.1 5.1l1.8-2 5 1.3v2.8c0 1-.8 1.8-1.8 1.8A15.7 15.7 0 0 1 4.8 5.3c0-1 .8-1.8 1.8-1.8Z"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M4 6h16v12H4z" />
      <path {...sharedProps} d="m4 8 8 6 8-6" />
    </svg>
  );
}

export function LocationIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle {...sharedProps} cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...sharedProps} cx="12" cy="12" r="9" />
      <path {...sharedProps} d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...sharedProps} x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle {...sharedProps} cx="12" cy="12" r="3.8" />
      <path {...sharedProps} d="M17.2 6.8h.01" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v5h4v-5h3l1-4h-4V8Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...sharedProps} d="M5 8v11" />
      <path {...sharedProps} d="M5 5h.01" />
      <path {...sharedProps} d="M10 19v-6a3 3 0 0 1 6 0v6" />
      <path {...sharedProps} d="M10 10v9" />
    </svg>
  );
}
