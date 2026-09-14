import { Email, Placeholder } from "@/components/legal/LegalArticle";

/** The policy text, verbatim from the source, as a plain document. */
export default function PrivacyPolicy() {
  return (
    <>
      <h2 id="who">1. Who we are</h2>
      <p>
        SalDev is a B2B outbound agency operated by <Placeholder />, working from Dhaka, Bangladesh and Kuwait,
        mostly for clients in the United States. For anything in this policy, email <Email />.
      </p>
      <p>
        When we run outreach for a client, we act on that client’s instructions for the campaign and hand them
        the prospect data and meeting logs we produce. The client is responsible for what they do with it
        afterwards.
      </p>

      <h2 id="collect">2. What we collect</h2>
      <h3>Visitors to this site</h3>
      <ul>
        <li>
          What you send us through the contact form: work email, company, which setup you’re considering, and
          whatever you write in the free-text field.
        </li>
        <li>
          Standard server logs from our hosting provider (IP address, browser, pages requested). We do not
          currently run analytics or advertising cookies. If that changes, this page will say so.
        </li>
      </ul>
      <h3>Clients</h3>
      <ul>
        <li>
          Contact and company details, billing details (card payments are handled by our payment provider; we
          don’t store card numbers), and our correspondence.
        </li>
        <li>
          Read access to your CRM where you grant it, the shared meeting log, and meeting notes or recordings
          where you’ve agreed to them, so both of us can see which meetings became what.
        </li>
        <li>Access credentials for the sending domains, inboxes and profiles we set up in your name.</li>
      </ul>
      <h3>Prospects (people we contact for clients)</h3>
      <ul>
        <li>
          Business contact data: name, job title, company, work email, public LinkedIn or X profile, and company
          information and public signals (hiring, funding, posts) that make a message relevant.
        </li>
        <li>
          We research this from public sources and licensed B2B data providers, and we verify email addresses
          before sending. We don’t buy bulk lead lists.
        </li>
        <li>Replies, and whether a meeting was booked, held, or declined.</li>
      </ul>

      <h2 id="why">3. Why, and on what basis</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Data</th>
              <th>Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Answering enquiries</td>
              <td data-label="Data">Contact form submissions</td>
              <td data-label="Basis">Our legitimate interest in responding to you; the steps before a contract</td>
            </tr>
            <tr>
              <td>Delivering the service</td>
              <td data-label="Data">Client data, CRM access, meeting logs</td>
              <td data-label="Basis">Performance of our agreement with you</td>
            </tr>
            <tr>
              <td>Outreach on a client’s behalf</td>
              <td data-label="Data">Prospect business contact data</td>
              <td data-label="Basis">
                Legitimate interest in business-to-business marketing, with an easy way to opt out; consent where
                the law of the recipient’s country requires it
              </td>
            </tr>
            <tr>
              <td>Invoicing, tax, disputes</td>
              <td data-label="Data">Billing and engagement records</td>
              <td data-label="Basis">Legal obligation; legitimate interest</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We don’t sell personal data, and we don’t use prospect data for anything other than the client campaign
        it was researched for.
      </p>

      <h2 id="outreach">4. Outreach standards</h2>
      <p>
        Every campaign we run follows the same rules, because they’re what keeps the work honest and the domains
        clean:
      </p>
      <ul>
        <li>
          Messages identify who is writing and which company they represent, and say why we’re writing to that
          person.
        </li>
        <li>No misleading subject lines or sender names.</li>
        <li>
          Every email includes a way to opt out; a plain “no thanks” reply counts too. We honor opt-outs promptly
          and keep a do-not-contact list so the person isn’t written to again, by us, for any client.
        </li>
        <li>
          We follow the rules of the platforms we use (LinkedIn, X) and applicable anti-spam and privacy laws
          where we and our clients operate, including CAN-SPAM in the United States and GDPR/PECR where they
          apply.
        </li>
        <li>
          We send from dedicated domains and profiles set up for the campaign, never from a client’s primary
          domain.
        </li>
      </ul>

      <h2 id="share">5. Who we share it with</h2>
      <ul>
        <li>
          <b>Our clients</b>, who receive the prospect data, replies and meeting logs for their own campaign.
        </li>
        <li>
          <b>Sub-processors</b> we use to do the work: email sending and warm-up platforms, B2B data and
          email-verification providers, scheduling and calendar tools, CRM and spreadsheet tools, cloud storage,
          and our payment provider. Each only gets what it needs. A current list is available on request.
        </li>
        <li>
          <b>Authorities</b>, where the law requires it.
        </li>
      </ul>

      <h2 id="transfers">6. International transfers</h2>
      <p>
        We work from Bangladesh and Kuwait; our clients and most prospects are in the United States; our
        providers process data in the US and the EU. Where a transfer needs a legal safeguard (for example, data
        about people in the UK or EU), we rely on the providers’ standard contractual clauses or equivalent
        measures.
      </p>

      <h2 id="retention">7. How long we keep it</h2>
      <ul>
        <li>Contact-form enquiries: up to 12 months after our last exchange, unless you become a client.</li>
        <li>Client records: for the engagement, then as long as invoicing, tax and dispute rules require.</li>
        <li>
          Prospect data: for the campaign it was researched for. When an engagement ends, the lists and logs are
          handed to the client and removed from our working systems. We keep the do-not-contact list, so opt-outs
          stay honored.
        </li>
      </ul>

      <h2 id="security">8. Security</h2>
      <p>
        Access is limited to the people working on your account, protected by two-factor authentication, and
        our providers encrypt data in transit and at rest. No system is perfect; if something goes wrong that
        affects you, we’ll tell you.
      </p>

      <h2 id="rights">9. Your rights</h2>
      <p>
        Depending on where you live you can ask us to tell you what we hold about you, correct it, delete it,
        stop using it for a purpose, restrict it, or give you a copy. Email <Email /> and we’ll act within 30
        days. If you’re unhappy with how we handled it, you can complain to your local data protection
        authority.
      </p>

      <h2 id="prospects">10. If we contacted you on behalf of a client</h2>
      <div className="box">
        <p>
          <b>You can make it stop in one line.</b> Reply “no” to the message, or email <Email /> with the address
          or profile we used. We’ll stop, remove you from that campaign, and add you to our do-not-contact list so
          no other client’s campaign reaches you through us. You can also ask what data we held and where it came
          from.
        </p>
      </div>

      <h2 id="changes">11. Changes to this policy</h2>
      <p>
        When we change this page we update the date at the top. Material changes to how we treat client data are
        also sent to current clients by email.
      </p>

      <h2 id="contact">12. Contact</h2>
      <p>
        <Placeholder />
        <br />
        Email: <Email />
      </p>
    </>
  );
}
