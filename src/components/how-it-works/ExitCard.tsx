/** The exit, agreed up front: the one card on the page that is not a step. */
export default function ExitCard() {
  return (
    <section id="exit" className="relative z-[1] pt-2.5 pb-24 max-cols:pb-[70px]" aria-labelledby="exit-title">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="rv grid grid-cols-[auto_1fr] items-start gap-5 rounded-lg border border-line bg-white px-8 py-[30px] shadow-[0_24px_50px_-34px_rgba(0,0,0,.3)] max-eq:grid-cols-1">
          <span
            className="grid size-11 place-items-center rounded-xl border border-orange-pale bg-[rgba(255,94,0,.09)] text-orange"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="size-[22px]"
            >
              <path d="M10 17l5-5-5-5M15 12H3M21 4v16" />
            </svg>
          </span>
          <div>
            <h2 id="exit-title" className="mb-2.5 text-[20px] font-bold tracking-[-.025em] text-ink">
              If it isn’t working: the exit, agreed up front.
            </h2>
            <p className="max-w-[78ch] text-[15.5px] leading-[1.65] text-ink-3">
              Outbound is experimentation, and some offers don’t find their angle in one cycle. You’ll
              know from the weekly report, which says what’s working and what isn’t in plain terms. If
              replies are flat, we’ll tell you what we think is wrong and what we’d change, and we pick
              one of three things: change the ICP, change the angle, or stop.
            </p>
            <p className="mt-2.5 max-w-[78ch] text-[15.5px] leading-[1.65] text-ink-3">
              If we stop, you leave with the domains, inboxes, lists, sequences and a written playbook
              of what was tried, and you owe nothing further: there was never a monthly fee, and the
              10% only ever applied to deals that closed.{" "}
              <em className="font-semibold text-ink not-italic">
                We’d rather lose a client cleanly than keep one by hiding the numbers.
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
