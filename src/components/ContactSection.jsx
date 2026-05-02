import { useEffect, useState } from "react";
import { ClockIcon, LocationIcon, MailIcon, PhoneIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const cardIcons = [LocationIcon, ClockIcon, PhoneIcon];

const emptyForm = {
  name: "",
  phone: "",
  pet: "",
  service: "",
  message: "",
};

export function ContactSection({ content, serviceOptions }) {
  const [formValues, setFormValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setErrors({});
    setSubmitted(false);
  }, [content]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const phoneValue = formValues.phone.trim();

    if (!formValues.name.trim()) {
      nextErrors.name = "nameRequired";
    }

    if (!phoneValue) {
      nextErrors.phone = "phoneRequired";
    } else if (!/^[0-9+\s().-]{8,}$/.test(phoneValue)) {
      nextErrors.phone = "phoneInvalid";
    }

    if (!formValues.service) {
      nextErrors.service = "serviceRequired";
    }

    if (formValues.message.trim().length < 18) {
      nextErrors.message = "messageShort";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setFormValues(emptyForm);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />

            <div className="mt-8 grid gap-4">
              {content.cards.map((card, index) => {
                const Icon = cardIcons[index];

                return (
                  <Reveal key={card.label} delay={index * 0.07}>
                    <div className="section-frame flex items-center gap-4 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(76,175,80,0.14)] text-[var(--green-1)]">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-[var(--text-2)]">
                          {card.label}
                        </p>
                        <p className="mt-2 text-sm font-medium">{card.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="section-frame map-grid relative mt-6 overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,174,218,0.15),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(76,175,80,0.16),transparent_34%)]" />
              <div className="relative">
                <span className="eyebrow">{content.mapLabel}</span>
                <h3 className="mt-5 text-2xl font-semibold">{content.mapTitle}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-2)]">
                  {content.mapBody}
                </p>

                <div className="mt-8 flex items-center gap-4 rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-4 shadow-soft">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(76,175,80,0.14)] text-[var(--green-1)]">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[rgba(76,175,80,0.14)]" />
                    <LocationIcon className="relative h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Casablanca</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[var(--text-2)]">
                      {content.mapCountry}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="section-frame p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-[var(--text-2)]">
                    {content.form.heading}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{content.title}</h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(120,174,218,0.14)] text-[var(--blue-1)]">
                  <MailIcon />
                </div>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="name">
                      {content.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder={content.form.placeholders.name}
                      aria-invalid={Boolean(errors.name)}
                      className="field-shell"
                    />
                    {errors.name ? (
                      <p className="mt-2 text-sm text-[#d15a57]">
                        {content.form.errors[errors.name]}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="phone">
                      {content.form.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formValues.phone}
                      onChange={handleChange}
                      placeholder={content.form.placeholders.phone}
                      aria-invalid={Boolean(errors.phone)}
                      className="field-shell"
                    />
                    {errors.phone ? (
                      <p className="mt-2 text-sm text-[#d15a57]">
                        {content.form.errors[errors.phone]}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="pet">
                      {content.form.pet}
                    </label>
                    <input
                      id="pet"
                      name="pet"
                      type="text"
                      value={formValues.pet}
                      onChange={handleChange}
                      placeholder={content.form.placeholders.pet}
                      className="field-shell"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="service">
                      {content.form.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formValues.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                      className="field-shell"
                    >
                      <option value="">{content.form.placeholders.service}</option>
                      {serviceOptions.map((option) => (
                        <option key={option.title} value={option.title}>
                          {option.title}
                        </option>
                      ))}
                    </select>
                    {errors.service ? (
                      <p className="mt-2 text-sm text-[#d15a57]">
                        {content.form.errors[errors.service]}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium" htmlFor="message">
                    {content.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder={content.form.placeholders.message}
                    aria-invalid={Boolean(errors.message)}
                    className="field-shell resize-none"
                  />
                  {errors.message ? (
                    <p className="mt-2 text-sm text-[#d15a57]">
                      {content.form.errors[errors.message]}
                    </p>
                  ) : null}
                </div>

                <button type="submit" className="primary-button w-full">
                  {content.form.submit}
                </button>

                {submitted ? (
                  <p className="rounded-[1.25rem] border border-[rgba(76,175,80,0.22)] bg-[rgba(76,175,80,0.08)] px-4 py-3 text-sm text-[var(--green-1)]">
                    {content.form.success}
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
