export default function AccordionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='708'
      height='480'
      viewBox='0 0 708 480'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect width='708' height='480' fill='white' />
      <rect
        x='178.5'
        y='96.5'
        width='351'
        height='287'
        rx='11.5'
        fill='#FAFAFA'
        stroke='#D1D1D1'
      />
      {/* Row 1 (collapsed) */}
      <rect x='210' y='132' width='170' height='14' rx='7' fill='#C8C8C8' />
      <path
        d='M486 135l9 9 9-9'
        stroke='#9E9E9E'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <line x1='178' y1='180' x2='530' y2='180' stroke='#E0E0E0' />
      {/* Row 2 (expanded) */}
      <rect x='210' y='206' width='190' height='14' rx='7' fill='#7A7A7A' />
      <path
        d='M504 221l-9-9-9 9'
        stroke='#9E9E9E'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect x='210' y='240' width='280' height='10' rx='5' fill='#D8D8D8' />
      <rect x='210' y='262' width='250' height='10' rx='5' fill='#D8D8D8' />
      <line x1='178' y1='300' x2='530' y2='300' stroke='#E0E0E0' />
      {/* Row 3 (collapsed) */}
      <rect x='210' y='332' width='150' height='14' rx='7' fill='#C8C8C8' />
      <path
        d='M486 335l9 9 9-9'
        stroke='#9E9E9E'
        strokeWidth='6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
