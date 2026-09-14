/**
 * The SalDev mark (seam-3d), defined once as an SVG <symbol> so the nav and
 * footer can reference it with <use href="#sdMark">. Rendered in the root
 * layout; visually empty (0x0) and hidden from assistive tech.
 */
const OUTLINE =
  "M 10 0 L 48 0 A 48 48 0 0 1 48 96 L 10 96 A 10 10 0 0 1 0 86 L 0 10 A 10 10 0 0 1 10 0 Z";

const ORANGE_HALF =
  "M 51.1 95.9 L 54.3 95.6 L 60.4 94.4 L 63.4 93.5 L 69.2 91.0 L 74.7 87.9 L 77.2 86.1 L 81.9 81.9 L 84.1 79.6 L 86.1 77.2 L 89.6 72.0 L 91.0 69.2 L 93.5 63.4 L 94.4 60.4 L 95.6 54.3 L 96.0 48.0 L 95.9 44.9 L 95.6 41.7 L 94.4 35.6 L 93.5 32.6 L 91.0 26.8 L 89.6 24.0 L 86.1 18.8 L 84.1 16.4 L 79.6 11.9 L 77.2 9.9 L 72.0 6.4 L 69.2 5.0 L 63.4 2.5 L 60.4 1.6 L 54.3 0.4 L 51.1 0.1 L 46.4 0.1 L 41.8 0.8 L 37.4 2.5 L 33.4 5.0 L 30.0 8.2 L 27.2 12.0 L 25.3 16.3 L 24.2 20.9 L 24.1 25.6 L 24.8 30.2 L 25.8 33.2 L 27.2 36.0 L 30.0 39.8 L 33.4 43.0 L 37.4 45.5 L 40.3 46.7 L 44.9 47.8 L 52.7 48.5 L 55.7 49.3 L 60.0 51.2 L 62.6 53.0 L 66.0 56.2 L 68.8 60.0 L 70.2 62.8 L 71.2 65.8 L 71.8 68.9 L 71.9 73.6 L 71.2 78.2 L 70.2 81.2 L 68.8 84.0 L 67.0 86.6 L 65.0 89.0 L 62.6 91.0 L 60.0 92.8 L 57.2 94.2 L 54.2 95.2 L 51.1 95.8 L 48.0 96.0 L 51.1 95.9 Z";

const DARK_HALF =
  "M 48.0 0.0 L 44.9 0.2 L 41.8 0.8 L 37.4 2.5 L 33.4 5.0 L 31.0 7.0 L 29.0 9.4 L 27.2 12.0 L 25.8 14.8 L 24.5 19.3 L 24.0 24.0 L 24.2 27.1 L 24.8 30.2 L 25.8 33.2 L 28.0 37.3 L 31.0 41.0 L 34.7 44.0 L 37.4 45.5 L 41.8 47.2 L 44.9 47.8 L 52.7 48.5 L 57.2 49.8 L 61.3 52.0 L 63.8 54.0 L 66.0 56.2 L 68.0 58.7 L 69.5 61.4 L 71.2 65.8 L 71.8 68.9 L 72.0 72.0 L 71.8 75.1 L 71.2 78.2 L 70.2 81.2 L 68.8 84.0 L 67.0 86.6 L 65.0 89.0 L 62.6 91.0 L 58.6 93.5 L 55.7 94.7 L 52.7 95.5 L 48.0 96.0 L 10.0 96.0 L 8.0 95.8 L 5.9 95.1 L 3.7 93.7 L 1.7 91.6 L 0.5 89.2 L 0.0 86.7 L 0.0 86.0 L 0.0 10.0 L 0.2 8.0 L 0.9 5.9 L 2.1 3.9 L 3.9 2.1 L 6.2 0.8 L 8.7 0.1 L 48.0 0.0 Z";

export default function BrandMarkDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="sdO" gradientUnits="userSpaceOnUse" cx="36" cy="28" r="78">
          <stop offset="0" stopColor="#FFA155" />
          <stop offset="1" stopColor="#FF6000" />
        </radialGradient>
        <radialGradient id="sdD" gradientUnits="userSpaceOnUse" cx="26" cy="20" r="96">
          <stop offset="0" stopColor="#322B23" />
          <stop offset="1" stopColor="#0A0806" />
        </radialGradient>
        <radialGradient id="sdDarkLift" gradientUnits="userSpaceOnUse" cx="26" cy="20" r="96">
          <stop offset="0" stopColor="#6E6152" />
          <stop offset="1" stopColor="#241F19" />
        </radialGradient>
        <filter id="sdBb" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" />
        </filter>
        <clipPath id="sdCO">
          <path d={ORANGE_HALF} />
        </clipPath>
        <clipPath id="sdCD">
          <path d={DARK_HALF} />
        </clipPath>

        <symbol id="sdMark" viewBox="-14 -12 124 124">
          <path fill="#14110D" d={OUTLINE} />
          <path fill="url(#sdO)" d={ORANGE_HALF} />
          <g clipPath="url(#sdCO)">
            <g transform="translate(-2 -2)">
              <path fill="none" stroke="#8F3700" strokeOpacity="0.5" strokeWidth="5.5" filter="url(#sdBb)" d={OUTLINE} />
            </g>
            <g transform="translate(1.8 1.8)">
              <path fill="none" stroke="#FFD2A8" strokeOpacity="0.55" strokeWidth="4" filter="url(#sdBb)" d={OUTLINE} />
            </g>
          </g>
          <path className="sd-dark" fill="url(#sdD)" d={DARK_HALF} />
          <g clipPath="url(#sdCD)">
            <g transform="translate(-2 -2)">
              <path fill="none" stroke="#000000" strokeOpacity="0.5" strokeWidth="5.5" filter="url(#sdBb)" d={OUTLINE} />
            </g>
            <g transform="translate(1.8 1.8)">
              <path fill="none" stroke="#857661" strokeOpacity="0.5" strokeWidth="4" filter="url(#sdBb)" d={OUTLINE} />
            </g>
          </g>
        </symbol>
      </defs>
    </svg>
  );
}
