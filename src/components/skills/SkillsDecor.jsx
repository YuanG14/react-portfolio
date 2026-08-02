/**
 * Subtle decoration confined to the Skills section — a couple of
 * small blurred color fields plus a faint dot grid. Deliberately
 * separate from (and much smaller/lower-opacity than) the global
 * GradientBlobs/GridBackground already mounted once in MainLayout,
 * so this adds a bit of section-specific depth without competing
 * with or duplicating that site-wide ambient layer.
 */
export default function SkillsDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
      <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-purple/10 blur-[90px]" />
      <div className="absolute right-0 top-1/3 hidden h-64 w-64 rounded-full bg-cyan/10 blur-[100px] sm:block" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
    </div>
  )
}
