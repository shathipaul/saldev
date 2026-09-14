/** A run of body copy; `{ em }` renders as an emphasised run. */
export type Rich = string | { em: string };

/** Plain text, for structured data and alt text. */
export function richToText(runs: Rich[]) {
  return runs.map((run) => (typeof run === "string" ? run : run.em)).join("");
}
