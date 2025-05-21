import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogContent,
  Button,
  Tooltip,
  mergeClasses,
  tokens,
} from '@fluentui/react-components';
import { CodeFilled, DismissFilled } from '@fluentui/react-icons';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import prismStyles from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import CopyButton from './copyButton';

import './componentPreview.css';

SyntaxHighlighter.registerLanguage('tsx', tsx);

type Props = React.PropsWithChildren & {
  code: string;
  className?: string;
};

export default function ComponentPreview({ children, className, code }: Props) {
  return (
    <div className={mergeClasses('component-preview', className)}>
      {children}

      <Dialog>
        <DialogTrigger>
          <Tooltip content='Code' relationship='label'>
            <Button
              className='component-preview-code-button'
              icon={<CodeFilled />}
              appearance='transparent'
              label='code'></Button>
          </Tooltip>
        </DialogTrigger>
        <DialogSurface style={{ maxHeight: 'calc(100vh - 2rem)' }}>
          <DialogBody
            style={{
              maxHeight: 'calc(100vh - 5rem)',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <DialogTitle
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              Code
              <DialogTrigger>
                <Button
                  appearance='transparent'
                  icon={<DismissFilled />}
                  aria-label='close dialog'></Button>
              </DialogTrigger>
            </DialogTitle>
            <DialogContent
              style={{
                overflow: 'auto',
                flexGrow: 1,
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

              <SyntaxHighlighter
                language='tsx'
                style={prismStyles}
                customStyle={{
                  maxHeight: '28rem',
                  scrollbarWidth: 'thin',
                  scrollbarColor: `${tokens.colorNeutralBackgroundAlpha} transparent`,
                }}>
                {code}
              </SyntaxHighlighter>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}
