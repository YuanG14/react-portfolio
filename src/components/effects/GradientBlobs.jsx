/**
 * Three large, heavily-blurred color fields that drift slowly in the
 * background (pure CSS keyframes defined in index.css — no per-frame
 * JS cost). They sit behind the grid's spotlight mask and give the
 * dark canvas depth without competing with foreground content.
 */
export default function GradientBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-[120px] animate-blob-a"
        style={{ background: 'var(--color-purple)' }}
      />
      <div
        className="absolute right-[-15%] top-[10%] h-[480px] w-[480px] rounded-full opacity-25 blur-[120px] animate-blob-b"
        style={{ background: 'var(--color-blue)' }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[560px] w-[560px] rounded-full opacity-20 blur-[130px] animate-blob-c"
        style={{ background: 'var(--color-cyan)' }}
      />
    </div>
  )
}
