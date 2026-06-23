import { type Theme } from '@fluentui/react-components';
import { webDarkTheme, webLightTheme } from '@fluentui/react-components';

export const lightTheme = webLightTheme;

export const darkTheme = webDarkTheme;

export const lightDarkTheme = createLightDarkTheme(lightTheme, darkTheme);

export function createStyleSheet(lightDarkTheme: Theme) {
  return `
:root {
${Object.entries(lightDarkTheme)
  .map(([cssVarName, value]) => `--${cssVarName}: ${value};`)
  .join('\n')}
}
`;
}

function createLightDarkTheme(lightTheme: Theme, darkTheme: Theme) {
  const lightDarkTheme: Theme = {} as Theme;

  Object.entries(lightTheme).forEach(([key, lightThemeValue]) => {
    if (key.includes('color') || key.includes('shadow')) {
      const darkThemeValue = darkTheme[key as keyof typeof darkTheme];

      if (!darkThemeValue) {
        throw new Error(
          `Key "${key}" is present in light theme but missing in dark theme.`,
        );
      }

      // @ts-expect-error - typescript doesn't like this but we know the types are correct
      lightDarkTheme[key] = `light-dark(${lightThemeValue}, ${darkThemeValue})`;
    } else {
      // @ts-expect-error - typescript doesn't like this but we know the types are correct
      lightDarkTheme[key] = lightThemeValue;
    }
  });

  return lightDarkTheme;
}
