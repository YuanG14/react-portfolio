import { cn } from '../../lib/cn'

/**
 * A single glass stat tile: icon, large gradient number, small label.
 * Pure presentation — entrance/stagger timing is controlled by the
 * caller wrapping each card in its own <Reveal>, so this component
 * stays reusable wherever a "big number" needs showing (About now,
 * potentially Experience/Projects later).
 */
export default function StatCard({ icon: Icon, value, label, className }) {
  return (
    <div
      className={cn(
        'glass rounded-2xl px-6 py-6 text-center transition-colors duration-300 hover:border-border-strong',
        className
      )}
    >
      {Icon && <Icon className="mx-auto mb-3 text-xl text-cyan" aria-hidden="true" />}
      <p className="font-display text-3xl font-semibold text-gradient-accent">{value}</p>
      <p className="mt-1 text-sm text-ink-muted">{label}</p>
    </div>
  )
}
