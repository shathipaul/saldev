import Link from "next/link";
import { Email, Placeholder } from "@/components/legal/LegalArticle";

const LINK = "font-semibold text-orange no-underline";

/** The terms text, verbatim from the source, as a plain document. */
export default function TermsOfService() {
  return (
    <>
      <h2 id="parties">1. Who’s who</h2>
      <p>
        “We”, “us” and “SalDev” mean <Placeholder />. “You” means the company engaging us, or the person using
        this site. These terms cover the website and, unless a signed service agreement says otherwise, our
        outbound services.
      </p>

      <h2 id="service">2. The service</h2>
      <p>
        We build and run outbound outreach on your behalf across the channels in your setup (cold email, or cold
        email plus LinkedIn and X): ICP and angles written down, a hand-built and verified list, dedicated
        domains and inboxes bought in your name and warmed, sequence copy you approve before anything sends,
        managed sending and daily monitoring, first-line reply handling and booking onto your calendar, and a
        weekly written report plus a shared dashboard. The process is described on the{" "}
        <Link href="/how-it-works" className={LINK}>
          How it works
        </Link>{" "}
        page.
      </p>

      <h2 id="start">3. How an engagement starts</h2>
      <ul>
        <li>
          The 20-minute call you book is Step 1. On it we agree your ideal customer, your offer, the angles worth
          testing, which calendar meetings land on, and <b>what “qualified” means for you, in writing</b>{" "}
          (company fit, role, geography, genuine interest, booked through our calendar link).
        </li>
        <li>
          If we both want to go ahead, you sign the service agreement and pay the setup fee. Within 48 hours we
          send you the written ICP, the qualification criteria and the first play.
        </li>
        <li>Nothing is sent under your name until you have approved the list and the copy.</li>
      </ul>

      <h2 id="fees">4. Fees</h2>
      <div className="box">
        <p>
          <b>Setup fee (one time, at signing).</b> Email setup from $1,500 (cold email only; 10 sending domains
          and 30 inboxes). Multichannel setup from $2,500 (email, LinkedIn and X; 25 domains and 75 inboxes, plus
          one LinkedIn profile and one X profile run for you). “From” because list size and volume move the
          number; the exact figure is agreed before you sign. The setup fee covers the build and is{" "}
          <Placeholder>non-refundable once the build has started</Placeholder>.
        </p>
        <p>
          <b>Per meeting: $250</b> for each held, qualified meeting (defined in section 5), invoiced monthly in
          arrears with the meeting log attached.
        </p>
        <p>
          <b>Revenue share: 10%</b> of first-year contract value on deals closed from meetings we booked, for
          deals that close within 12 months of the meeting, paid monthly as you collect the cash. If a customer
          churns or is refunded inside 90 days, the share on that deal is credited back against your next
          invoice.
        </p>
        <p>
          <b>No monthly fee. No minimum term.</b> Domains, inboxes and tools are bought in your name; we carry
          their running cost for as long as the engagement runs. If nothing is booked, nothing is billed after
          the setup.
        </p>
      </div>
      <ul>
        <li>
          Invoices are due within <Placeholder>14 days</Placeholder>. Fees exclude any taxes you’re required to
          add or withhold.
        </li>
        <li>
          To make the revenue share work, you give us read access to your CRM (or an equivalent deal log) and
          report closed deals from our meetings within the month they close. We’ll reconcile against the shared
          meeting log.
        </li>
      </ul>

      <h2 id="qualified">5. What counts as a held, qualified meeting</h2>
      <ul>
        <li>
          <b>Held</b>: the prospect attends the meeting (or a rescheduled one).
        </li>
        <li>
          <b>Qualified</b>: the prospect meets the written criteria agreed at kickoff.
        </li>
        <li>
          <b>No-shows are not billed.</b> We get 14 days to rebook a no-show; if it happens within that window it
          is billable, otherwise it isn’t.
        </li>
        <li>
          <b>Rejections.</b> You can reject a billed meeting within 5 business days by telling us which written
          criterion it clearly failed. A meeting cannot be rejected because the prospect did not buy, raised
          objections, or was not ready to close. Disputes are settled by looking at the meeting log and, where
          one exists, the recording or notes.
        </li>
        <li>
          If more than 20% of a month’s meetings are rejected, we pause and review the criteria together before
          sending more.
        </li>
      </ul>

      <h2 id="you">6. Your side</h2>
      <ul>
        <li>
          Approve lists and copy within a reasonable time, attend the meetings we book or tell us promptly so we
          can rebook, and keep the calendar we book into open.
        </li>
        <li>
          Give accurate information about your product, pricing and claims; what we send under your name has to
          be true.
        </li>
        <li>Grant the CRM read access and report closed deals honestly, as described in section 4.</li>
        <li>
          Don’t use the lists, sequences or infrastructure we build to send bulk or unsolicited messages outside
          the agreed campaigns, or in any way that would break the law or platform rules.
        </li>
      </ul>

      <h2 id="own">7. Ownership</h2>
      <ul>
        <li>
          The domains, inboxes, profiles and tool accounts are set up in your name and are yours from day one. On
          termination you keep them and take over their running cost.
        </li>
        <li>
          The lists, sequences, qualification criteria, reports and the written playbook we produce for you are
          yours on delivery.
        </li>
        <li>
          Our methods, templates, tooling and know-how stay ours; we may reuse them for other clients, never
          your data or your copy.
        </li>
      </ul>

      <h2 id="noguarantee">8. No guarantees</h2>
      <p>
        We commit to the build, a launch within 14 days of your approval of the list and copy, the activity
        every week, your approval of every list and message, and a written report every week.{" "}
        <b>We do not commit to a number of meetings, replies, opportunities or revenue.</b> Any numbers on this
        site about reply rates, timelines or results are illustrative, and your results will depend on your
        offer, your market and your sales process.
      </p>

      <h2 id="term">9. Term, and how to end it</h2>
      <ul>
        <li>There is no minimum term. Either of us can end the engagement with written notice at any time.</li>
        <li>
          Fees already accrued remain payable. Meetings booked before notice that are held within 14 days after
          it are billable. The revenue share applies to deals closed within 12 months of a meeting we booked,
          including after the engagement ends.
        </li>
        <li>
          On termination you keep everything in section 7, and we remove the campaign data from our working
          systems, keeping only what invoicing, tax and our do-not-contact list require.
        </li>
      </ul>

      <h2 id="conduct">10. Conduct and compliance</h2>
      <p>
        We follow the outreach standards in our{" "}
        <Link href="/privacy#outreach" className={LINK}>
          privacy policy
        </Link>{" "}
        and the anti-spam and privacy laws that apply where we and you operate. You confirm that your product
        and the claims you ask us to make are lawful, and that you have the right to have us contact businesses
        on your behalf. Either of us can end a campaign immediately if continuing it would break the law or a
        platform’s rules.
      </p>

      <h2 id="confidential">11. Confidentiality</h2>
      <p>
        We keep your business information, lists and results confidential and use them only to do the work. You
        keep our pricing terms, methods and materials confidential. Neither of us names the other publicly
        without permission; we will ask before using you as a reference.
      </p>

      <h2 id="liability">12. Liability</h2>
      <p>
        We are responsible for doing the work described here with reasonable skill and care. We aren’t liable
        for outcomes we don’t control: your close rate, platform restrictions or changes, deliverability
        decisions by mailbox providers, or the accuracy of public or licensed data sources. Neither of us is
        liable to the other for indirect or consequential loss, and our total liability for an engagement is
        capped at the fees you paid us in the three months before the claim, except where the law doesn’t allow
        a cap.
      </p>

      <h2 id="site">13. Using this site</h2>
      <p>
        The content, design and code of saldev.io are ours. You can read and link to it; you can’t copy it,
        scrape it, or use it to build a competing product. The site is provided as is; we do our best to keep it
        accurate and available but don’t promise either.
      </p>

      <h2 id="law">14. Governing law</h2>
      <p>
        These terms are governed by the laws of <Placeholder>[jurisdiction]</Placeholder>, and disputes go to
        the courts there, unless your signed service agreement says otherwise.
      </p>

      <h2 id="contact">15. Contact</h2>
      <p>
        <Placeholder />
        <br />
        Email: <Email />
      </p>
    </>
  );
}
