export const breakpoints = {
  sm: '@media (min-width: 479px) ',
  md: '@media (min-width: 639px)',
  lg: '@media (min-width: 1023px)',
  xl: '@media (min-width: 1365px)',
  '2xl': '@media (min-width: 1919px)',
} as const;

export const customTokens = {
  // -------- CONTAINER TOKENS --------
  container3Xs: '16rem' /* 256px */,
  container2Xs: '18rem' /* 288px */,
  containerXs: '20rem' /* 320px */,
  containerSm: '24rem' /* 384px */,
  containerMd: '28rem' /* 448px */,
  containerLg: '32rem' /* 512px */,
  containerXl: '36rem' /* 576px */,
  container2Xl: '42rem' /* 672px */,
  container3Xl: '48rem' /* 768px */,
  container4Xl: '56rem' /* 896px */,
  container5Xl: '64rem' /* 1024px */,
  container6Xl: '72rem' /* 1152px */,
  container7Xl: '80rem' /* 1280px */,

  // -------- SPACE TOKENS --------
  // Extra tokens for spacing. Default spacing tokens defined here
  // https://storybooks.fluentui.dev/react/?path=/docs/theme-spacing--docs
  // Fluent UI spacing tokens are defined here
  // https://fluent2.microsoft.design/layout
  spacing4XL: '2.25rem' /* 36px */,
  spacing5XL: '2.5rem' /* 40px */,
  spacing6XL: '2.75rem' /* 44px */,
  spacing7XL: '3rem' /* 48px */,
  spacing8XL: '3.25rem' /* 52px */,
  spacing9XL: '3.5rem' /* 56px */,
  spacing10XL: '3.75rem' /* 60px */,
  spacing11XL: '4rem' /* 64px */,
  spacing12XL: '4.25rem' /* 68px */,
  spacing13XL: '4.5rem' /* 72px */,
  spacing14XL: '4.75rem' /* 76px */,
  spacing15XL: '5rem' /* 80px */,
  spacing16XL: '5.25rem' /* 84px */,
  spacing17XL: '5.5rem' /* 88px */,
  spacing18XL: '5.75rem' /* 92px */,
  spacing19XL: '6rem' /* 96px */,
  spacing20XL: '6.25rem' /* 100px */,
} as const;
