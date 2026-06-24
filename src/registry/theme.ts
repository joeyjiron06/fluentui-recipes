export const breakpoints = {
  sm: '@media (min-width: 479px) ',
  md: '@media (min-width: 639px)',
  lg: '@media (min-width: 1023px)',
  xl: '@media (min-width: 1365px)',
  '2xl': '@media (min-width: 1919px)',
} as const;

export const customTokens = {
  // Sizes as described from Fluent UI
  // https://fluent2.microsoft.design/layout
  sizeNone: '0',
  size20: '0.125rem',
  size40: '0.25rem',
  size60: '0.375rem',
  size80: '0.5rem',
  size100: '0.625rem',
  size120: '0.75rem',
  size160: '1rem',
  size200: '1.25rem',
  size240: '1.5rem',
  size280: '1.75rem',
  size320: '2rem',
  size360: '2.25rem',
  size400: '2.5rem',
  size480: '3rem',
  size520: '3.25rem',
  size560: '3.5rem',
} as const;
