const PolicyPage = () => {
  return (
    <div>
      <section
        className="relative z-[1] pt-[78px] pb-2 max-cols:pt-[52px] max-cols:pb-1"
        aria-labelledby="policy-title"
      >
        <div className="mx-auto w-full max-w-page px-4 md:px-6">
          <p className="rv-boot mb-[22px] text-[12.5px] font-bold tracking-[.16em] text-orange uppercase">
            Outreach policy
          </p>
          <h1
            id="policy-title"
            style={{ animationDelay: "70ms" }}
            className="rv-boot mt-5 mb-[22px] text-[clamp(38px,6.2vw,74px)] leading-[1.02] font-extrabold tracking-[-.042em] text-ink"
          >
            How we run cold outreach,
            <br />
            <span className="bg-[linear-gradient(105deg,var(--color-orange)_8%,var(--color-orange-soft)_92%)] bg-clip-text text-transparent">
              for ourselves and for our clients.
            </span>
          </h1>
          <p
            style={{ animationDelay: "140ms" }}
            className="rv-boot max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-[1.55] tracking-[-.011em] text-ink-4"
          >
            Cold email is our work, so we hold it to clear rules.{" "}
            <b className="font-semibold text-ink-2">
              This page sets them out: who we write to, what every message
              contains, how much we send, and how to make it stop.
            </b>
          </p>
        </div>
      </section>

      <section className="relative z-[1] py-24 max-cols:py-[70px]">
        <div className="mx-auto w-full max-w-page px-4 md:px-6">
          <article className="max-w-[780px] [&_h2]:mt-[44px] [&_h2]:mb-3 [&_h2]:scroll-mt-[90px] [&_h2]:text-[clamp(20px,2.2vw,26px)] [&_h2]:font-bold [&_h2]:tracking-[-.025em] [&_h2:first-of-type]:mt-0 [&_b]:font-semibold [&_b]:text-ink [&_mark]:rounded-[4px] [&_mark]:bg-[#FFF1A8] [&_mark]:px-[5px] [&_mark]:py-px [&_mark]:font-semibold [&_mark]:text-[#5A4A00] [&_p]:text-[15.5px] [&_p]:leading-[1.7] [&_p]:text-ink-3 [&_p+p]:mt-3 [&_ul]:my-[10px] [&_ul]:ml-[22px] [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-[7px] [&_li]:text-[15.5px] [&_li]:leading-[1.7] [&_li]:text-ink-3">
            <p className="mb-[26px] flex flex-wrap gap-3.5 font-mono text-[11.5px] tracking-[.08em] text-ink-5 uppercase">
              <span>
                Last updated: <mark className="rounded-[4px] bg-[#FFF1A8] px-[5px] py-px font-semibold text-[#5A4A00]">20 November, 2026</mark>
              </span>
              <span>&middot;</span>
              <span>
                Applies to saldev.io, our sending domains and every campaign we
                run
              </span>
            </p>
            <nav aria-label="On this page">
            <ul className="mb-10 flex list-none flex-wrap gap-2">
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#covers">What this covers</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#who">Who we write to</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#sources">Where addresses come from</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#includes">What every message includes</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#volume">How much we send</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#stop">How to make it stop</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#clients">When we send for clients</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#law">The law</a>
              </li>
              <li>
                <a className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline" href="#report">Report a problem</a>
              </li>
            </ul>
            </nav>

            <h2 id="covers">1. What this covers</h2>
            <p>
              This policy covers SalDev&apos;s own outreach and every campaign
              we run for a client. It applies to saldev.io and to the domains we
              send our own outreach from, which all forward to this site:
              withsaldev.com, gosaldev.com, saldevhq.com, joinsaldev.com,
              meetsaldev.com, hellosaldev.com, trysaldev.com, getsaldev.com,
              teamsaldev.com and saldevio.com.
            </p>

            <h2 id="who">2. Who we write to</h2>
            <ul className="list-disc">
              <li>
                People at businesses, at their work email address, about
                something that relates to their role and their company.
              </li>
              <li>
                Business to business only. We don&apos;t write to consumers or
                to personal email addresses.
              </li>
              <li>
                Every message has a reason behind it for that person: their
                company&apos;s hiring, funding, product or market.
              </li>
            </ul>

            <h2 id="sources">3. Where addresses come from</h2>
            <ul className="list-disc">
              <li>
                Public sources, such as company websites, professional profiles
                and business news, and licensed B2B data providers.
              </li>
              <li>
                Every address is checked with an email verification tool before
                anything is sent. Addresses that fail the check are removed.
              </li>
              <li>We never buy or rent bulk email lists.</li>
            </ul>

            <h2 id="includes">4. What every message includes</h2>
            <ul className="list-disc">
              <li>
                The real name of the person writing and the company they work
                for.
              </li>
              <li>
                A reply address that reaches a person. Replies are read and
                answered.
              </li>
              <li>A one-line way to opt out, and our postal address.</li>
              <li>
                A subject line and sender name that match what the email is
                about. No misleading subject lines or sender names.
              </li>
              <li>Plain text, with no open tracking and no click tracking.</li>
            </ul>

            <h2 id="volume">5. How much we send</h2>
            <ul className="list-disc">
              <li>
                Every sending inbox is warmed up before it is used and sends a
                small daily volume. For our own outreach, that is no more than
                15 cold emails per inbox per day.
              </li>
              <li>Our own sequences are three emails at most. Then we stop.</li>
              <li>
                A sequence stops when the person replies. The one exception is
                an automatic out-of-office reply: then we wait until the person
                is back.
              </li>
            </ul>

            <h2 id="stop">6. How to make it stop</h2>
            <div className="my-[18px] rounded-lg border border-line bg-white px-6 py-[22px]">
              <p className="text-[15px]">
                <b>You can make it stop in one line.</b> Reply &quot;no&quot;,
                &quot;remove&quot;, &quot;unsubscribe&quot; or anything like it,
                or email <b>info@saldev.io</b> with the address we wrote to.
              </p>
            </div>
            <ul className="list-disc">
              <li>
                A reply stops the sequence straight away. Within one business
                day we add the address to our do-not-contact list, which covers
                every SalDev domain and every client campaign we run. We keep
                that list for good, so the opt-out holds.
              </li>
              <li>
                If you ask, we&apos;ll tell you where we found your address.
              </li>
            </ul>

            <h2 id="clients">7. When we send for clients</h2>
            <ul className="list-disc">
              <li>The same rules apply to every client campaign.</li>
              <li>
                Clients approve every list and every message before anything
                sends, and what we send under their name has to be true.
              </li>
              <li>
                Client campaigns go out from dedicated domains set up in the
                client&apos;s name, never from the client&apos;s main domain.
              </li>
              <li>
                Our terms forbid clients from using what we build for bulk or
                unsolicited mailing outside the agreed campaigns. If a campaign
                breaks these rules, we pause it.
              </li>
            </ul>

            <h2 id="law">8. The law</h2>
            <p>
              We follow the anti-spam and privacy laws that apply where we and
              the people we write to are, including CAN-SPAM in the United
              States and GDPR and PECR where they apply. Where a country
              requires consent before a business email, we don&apos;t email
              people there without it.
            </p>

            <h2 id="report">9. Report a problem</h2>
            <p>
              If you think an email from SalDev or one of our domains broke
              these rules, email <b>info@saldev.io</b> with the full headers of
              the message. We reply within two business days. If we got it
              wrong, we fix it and tell you what we changed.
            </p>
            <p>
              SalDev
              <br />
              Konkona Tower, Anondhodhara, North Chapain, Savar, Dhaka 1343,
              Bangladesh
              <br />
              Email: <b>info@saldev.io</b>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
