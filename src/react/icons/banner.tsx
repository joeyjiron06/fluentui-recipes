export default function BannerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='708'
      height='480'
      viewBox='0 0 708 480'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <rect width='708' height='480' fill='white' />
      {/* Banner bar */}
      <rect
        x='104.5'
        y='200.5'
        width='499'
        height='79'
        rx='11.5'
        fill='#FAFAFA'
        stroke='#D1D1D1'
      />
      {/* Leading icon */}
      <circle cx='148' cy='240' r='12' fill='#C8C8C8' />
      {/* Message text lines */}
      <rect x='184' y='226' width='220' height='12' rx='6' fill='#C8C8C8' />
      <rect x='184' y='246' width='150' height='10' rx='5' fill='#E0E0E0' />
      {/* Action button */}
      <rect x='470' y='222' width='84' height='36' rx='8' fill='#D1D1D1' />
      {/* Dismiss */}
      <path
        d='M566 234l16 16M582 234l-16 16'
        stroke='#9E9E9E'
        strokeWidth='5'
        strokeLinecap='round'
      />
    </svg>
  );
}
