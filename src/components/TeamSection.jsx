import { DepthCard } from "./DepthCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function TeamSection({ content, media }) {
  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label={content.title}>
      <div className="shell">
        <div className="section-frame overflow-hidden p-5 sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <SectionTitle
                eyebrow={content.eyebrow}
                title={content.title}
                description={content.description}
              />

              <div className="mt-8 grid gap-4">
                {content.members.map((member, index) => (
                  <Reveal key={member.name} delay={index * 0.08}>
                    <div className="rounded-[1.6rem] border border-[var(--line-soft)] bg-[var(--surface-2)] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--text-2)]">
                            {member.role}
                          </p>
                        </div>
                        <span className="rounded-full border border-[var(--line-soft)] px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--green-1)]">
                          {member.badge}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-2)]">
                        {member.bio}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal variant="right">
              <DepthCard
                className="relative overflow-hidden rounded-[2rem] border border-[var(--line-soft)] bg-[var(--surface-2)]"
                contentClassName="relative h-full"
                hoverLift={6}
                maxTilt={6}
              >
                <img
                  src={media.teamMoment.src}
                  alt={content.photoAlt}
                  loading="lazy"
                  decoding="async"
                  className="depth-layer-1 h-full min-h-[460px] w-full object-cover"
                />
                <div className="depth-layer-2 absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(9,13,11,0.78))] p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                    {content.photoLabel}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
                    {content.photoCaption}
                  </p>
                  <p className="mt-3 text-[11px] text-white/60">{media.teamMoment.credit}</p>
                </div>
              </DepthCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
