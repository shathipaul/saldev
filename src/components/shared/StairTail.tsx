/* stair-step tail walks the eye out of a dark block (Porter).
   5-step ramp, evenly spaced by luminance: 121 141 161 195 229 */
const STEPS: Array<[string, string]> = [
  ["h-11 max-cols:h-[30px]", "bg-[#FF5E00]"],
  ["h-[33px] max-cols:h-[23px]", "bg-[#FF752D]"],
  ["h-6 max-cols:h-[17px]", "bg-[#FE8C5A]"],
  ["h-4 max-cols:h-[11px]", "bg-[#FDB695]"],
  ["h-[9px] max-cols:h-1.5", "bg-[#FCE0D0]"],
];

export default function StairTail() {
  return (
    <div className="mt-[-1px] flex items-start pl-[8%] max-cols:pl-0" aria-hidden="true">
      {STEPS.map(([height, color]) => (
        <i key={color} className={`block w-[15%] max-cols:w-[18%] ${height} ${color}`} />
      ))}
    </div>
  );
}
