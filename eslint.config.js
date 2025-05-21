import eslintPluginAstro from 'eslint-plugin-astro'
import js from '@eslint/js'
import eslintPluginPrettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

/** @type {import("eslint").Linter.Config[]} */
export default [
  // javascript linting
  js.configs.recommended,

  // typescript linting
  ...tseslint.configs.recommended,

  // linting for astro
  ...eslintPluginAstro.configs.recommended,


  // astro accessibility linting
  ...(eslintPluginAstro.configs['jsx-a11y-strict']),

  {
    ...reactPlugin.configs.flat.recommended,
    files: ['**/*.tsx'],
    settings: {
      react: {
        version: 'detect',
      },
    }
  },
  {
    ...reactPlugin.configs.flat['jsx-runtime'],
    files: ['**/*.tsx'],
  },
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ['**/*.tsx'],
    plugins: {},
  },

  reactHooksPlugin.configs['recommended-latest'],

  {
    files: ['**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    }
  },

  // Adds prettier rules to eslint so we will get eslint errors if
  // formatting is off. if these rules conflict with something else
  // you should use eslint-config-prettier instead to disable allPre
  // rules that might conflict with prettier
  eslintPluginPrettierConfig,

  {
    ignores: [
      'dist',
      'node_modules',
      '.github',
      'types.generated.d.ts',
    ],
  },
]