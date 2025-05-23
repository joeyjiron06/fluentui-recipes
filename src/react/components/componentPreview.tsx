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
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from '@fluentui/react-components';
import { CodeFilled, DismissFilled } from '@fluentui/react-icons';
import { makeStyles } from '@fluentui/react-components';
import SyntaxHighlighter from './syntaxHighlighter';

type Props = React.PropsWithChildren & {
  code: string;
  codeDependencies?: { code: string; title: string; key: string }[];
  className?: string;
};

export default function ComponentPreview({
  children,
  className,
  code,
  codeDependencies,
}: Props) {
  const styles = useComponentPreviewStyles();
  return (
    <div className={mergeClasses(styles.root, className)}>
      {children}
      <Dialog>
        <DialogTrigger>
          <Tooltip content='Code' relationship='label'>
            <Button
              className={mergeClasses(
                styles.codeButton,
                'component-preview-code-button',
              )}
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
            {codeDependencies && codeDependencies.length > 0 ? (
              <>
                <DialogTitle
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  Dependencies
                  <DialogTrigger>
                    <Button
                      appearance='transparent'
                      icon={<DismissFilled />}
                      aria-label='close dialog'></Button>
                  </DialogTrigger>
                </DialogTitle>

                <Accordion collapsible>
                  {codeDependencies.map(({ key, code, title }) => (
                    <AccordionItem key={key} value={key}>
                      <AccordionHeader>{title}</AccordionHeader>
                      <AccordionPanel>
                        <SyntaxHighlighter
                          customStyle={{
                            maxHeight: '20rem',
                            scrollbarColor: `${tokens.colorNeutralBackgroundAlpha} transparent`,
                          }}>
                          {code}
                        </SyntaxHighlighter>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            ) : null}

            <DialogTitle
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              Code
              {codeDependencies && codeDependencies.length === 0 ? (
                <DialogTrigger>
                  <Button
                    appearance='transparent'
                    icon={<DismissFilled />}
                    aria-label='close dialog'></Button>
                </DialogTrigger>
              ) : null}
            </DialogTitle>
            <DialogContent
              style={{
                overflow: 'auto',
                flexGrow: 1,
                position: 'relative',
              }}>
              <SyntaxHighlighter>{code}</SyntaxHighlighter>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}

const useComponentPreviewStyles = makeStyles({
  root: {
    position: 'relative',
    '&:hover .component-preview-code-button, &:has(.component-preview-code-button:focus-visible) .component-preview-code-button':
      {
        opacity: 1,
      },
  },
  codeButton: {
    position: 'absolute',
    top: tokens.spacingVerticalS,
    right: tokens.spacingHorizontalS,
    zIndex: 10,
    opacity: 0,
    transition: 'opacity 100ms ease-out',
  },
  copyButton: {
    position: 'absolute',
    top: tokens.spacingVerticalS,
    right: tokens.spacingHorizontalS,
    zIndex: 10,
  },
});
