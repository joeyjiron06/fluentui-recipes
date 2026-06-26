export default function BreadcrumbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='708'
      height='480'
      viewBox='0 0 708 480'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect width='708' height='480' fill='white' />
      {/* Crumb 1 */}
      <rect x='150' y='222' width='90' height='36' rx='18' fill='#7A7A7A' />
      {/* Separator chevron */}
      <path
        d='M268 228l12 12-12 12'
        stroke='#9E9E9E'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Crumb 2 */}
      <rect x='304' y='222' width='110' height='36' rx='18' fill='#C8C8C8' />
      {/* Separator chevron */}
      <path
        d='M442 228l12 12-12 12'
        stroke='#9E9E9E'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Crumb 3 (current) */}
      <rect x='478' y='222' width='80' height='36' rx='18' fill='#D8D8D8' />
    </svg>
  );
}
