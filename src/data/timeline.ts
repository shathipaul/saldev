import type { Rich } from "./rich";

/** One row of the dated timeline (About chronology, How-it-works steps). */
export type TimelineRow = {
  /** Anchor id, when the row is a link target. */
  id?: string;
  /** Big label in the left column: a year or a day range. */
  label: string;
  /** Small line under the label. */
  note?: string;
  title: string;
  body: Rich[];
  /** "You:" line under the body. */
  you?: string;
  /** "Us:" line under the body. */
  us?: string;
  /** Current row: label rendered in orange. */
  now?: boolean;
};
