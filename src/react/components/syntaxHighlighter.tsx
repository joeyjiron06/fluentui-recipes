import {
  PrismLight,
  type SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import prismStyles from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import CopyButton from './copyButton';
import { tokens } from '@fluentui/react-components';

PrismLight.registerLanguage('tsx', tsx);

type Props = SyntaxHighlighterProps;

export default function SyntaxHighlighter({
  children,
  ...syntaxHighlighterProps
}: Props) {
  const code = Array.isArray(children) ? children.join('\n') : children;
  return (
    <div
      style={{
        position: 'relative',
      }}>
      <div
        style={{
          position: 'absolute',
          top: tokens.spacingVerticalS,
          right: tokens.spacingHorizontalS,
          zIndex: 10,
        }}>
        <CopyButton text={code} />
      </div>
      <PrismLight
        style={prismStyles}
        language='tsx'
        {...syntaxHighlighterProps}
        customStyle={{
          maxHeight: '20rem',
          scrollbarWidth: 'thin',
          scrollbarColor: `${tokens.colorNeutralBackgroundAlpha} transparent`,
          ...syntaxHighlighterProps.customStyle,
        }}>
        {children}
      </PrismLight>
    </div>
  );
}
