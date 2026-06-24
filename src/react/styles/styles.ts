import {
  webDarkTheme,
  webLightTheme,
  createCSSRuleFromTheme,
} from '@fluentui/react-components';

export const lightTheme = webLightTheme;

export const darkTheme = webDarkTheme;

export function createStyleSheet() {
  return `
/* Light Theme */
${createCSSRuleFromTheme('html[data-theme="light"]', lightTheme)}
    
/* Dark Theme */
${createCSSRuleFromTheme('html[data-theme="dark"]', darkTheme)}
  `;
}
