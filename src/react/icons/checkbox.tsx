export default function CheckboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='708'
      height='480'
      viewBox='0 0 708 480'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect width='708' height='480' fill='white' />
      {/* Checked box */}
      <rect x='250' y='200' width='80' height='80' rx='14' fill='#7A7A7A' />
      <path
        d='M272 240l13 14 24-26'
        stroke='white'
        strokeWidth='8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      {/* Label bar */}
      <rect x='356' y='222' width='150' height='36' rx='18' fill='#C8C8C8' />
    </svg>
  );
}
