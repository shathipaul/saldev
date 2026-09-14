import { Fragment } from "react";
import type { Rich } from "@/data/rich";

type Props = {
  runs: Rich[];
  /** Classes for the emphasised runs (rendered as <em>). */
  emphasisClassName: string;
};

export default function RichText({ runs, emphasisClassName }: Props) {
  return (
    <>
      {runs.map((run, i) =>
        typeof run === "string" ? (
          <Fragment key={i}>{run}</Fragment>
        ) : (
          <em key={i} className={emphasisClassName}>
            {run.em}
          </em>
        ),
      )}
    </>
  );
}
