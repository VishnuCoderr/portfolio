import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const PALETTE = [
  { name: "Midnight", hex: "#090D12", className: "bg-midnight" },
  { name: "Obsidian", hex: "#111820", className: "bg-obsidian" },
  { name: "Acid Lime", hex: "#B8FF35", className: "bg-lime" },
  { name: "Electric Cyan", hex: "#00D9FF", className: "bg-cyan" },
  { name: "Blaze Orange", hex: "#FF7138", className: "bg-orange" },
  { name: "Cobalt Blue", hex: "#1769FF", className: "bg-cobalt" },
];

export default function Home() {
  return (
    <>
      {/* Hero arrives in Milestone 2. This is the M1 foundation placeholder. */}
      <section id="top" className="flex min-h-svh items-center pt-28 pb-16">
        <Container>
          <p className="text-label text-lime">Milestone 1 · Foundation</p>
          <h1 className="text-display-xl mt-6">
            Vishnu <span className="text-lime">Kulkarni</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Design system and navigation shell. The cinematic hero arrives in Milestone 2.
          </p>
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {PALETTE.map((swatch) => (
              <li key={swatch.name} className="rounded-2xl border border-warm-white/10 p-3">
                <span className={`block h-14 rounded-xl ring-1 ring-inset ring-warm-white/15 ${swatch.className}`} aria-hidden="true" />
                <span className="mt-3 block text-sm font-medium">{swatch.name}</span>
                <span className="block font-mono text-xs text-muted">{swatch.hex}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section id="about" label="02 · About">
        <Container>
          <p className="text-muted">Placeholder. Content arrives in Milestone 4.</p>
        </Container>
      </Section>
      <Section id="projects" label="03 · Projects">
        <Container>
          <p className="text-muted">Placeholder. Verified project data arrives in Milestone 5.</p>
        </Container>
      </Section>
      <Section id="skills" label="04 · Skills">
        <Container>
          <p className="text-muted">Placeholder. Content arrives in Milestone 4.</p>
        </Container>
      </Section>
      <Section id="journey" label="05 · Journey">
        <Container>
          <p className="text-muted">Placeholder. Verified milestones arrive in Milestone 6.</p>
        </Container>
      </Section>
      <Section id="contact" label="06 · Contact">
        <Container>
          <p className="text-muted">Placeholder. Contact experience arrives in Milestone 7.</p>
        </Container>
      </Section>
    </>
  );
}
