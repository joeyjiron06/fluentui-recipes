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
  TabList,
  Tab,
  type SelectTabEvent,
  type SelectTabData,
} from '@fluentui/react-components';
import { CodeFilled, DismissFilled } from '@fluentui/react-icons';
import { makeStyles } from '@fluentui/react-components';
import { useState } from 'react';
import SyntaxHighlighter from './syntaxHighlighter';
import { breakpoints, customTokens } from '@/theme';

type ComponentSize = 'sm' | 'md' | 'lg';

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';

const installCommand: Record<PackageManager, (name: string) => string> = {
  pnpm: (name) => `pnpm dlx fluentui-recipes@latest add ${name}`,
  npm: (name) => `npx fluentui-recipes@latest add ${name}`,
  yarn: (name) => `yarn dlx fluentui-recipes@latest add ${name}`,
  bun: (name) => `bunx fluentui-recipes@latest add ${name}`,
};

const packageManagers = Object.keys(installCommand) as PackageManager[];

type Props = React.PropsWithChildren & {
  /** Registry item name, e.g. `fileUpload001`. Drives the install command. */
  name: string;
  code: string;
  className?: string;
  size?: ComponentSize;
};

export default function ComponentPreview({
  children,
  className,
  name,
  code,
  size = 'md',
}: Props) {
  const styles = useComponentPreviewStyles();
  const [packageManager, setPackageManager] = useState<PackageManager>('pnpm');

  // Map size prop to style classes
  const sizeStyles = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
  };

  return (
    <div
      className={mergeClasses(
        styles.root,
        sizeStyles[size],
        'component-preview',
        `component-preview-${size}`,
        className,
      )}>
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
            <DialogTitle
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              Installation
              <DialogTrigger>
                <Button
                  appearance='transparent'
                  icon={<DismissFilled />}
                  aria-label='close dialog'></Button>
              </DialogTrigger>
            </DialogTitle>
            <TabList
              selectedValue={packageManager}
              onTabSelect={(_event: SelectTabEvent, data: SelectTabData) =>
                setPackageManager(data.value as PackageManager)
              }>
              {packageManagers.map((pm) => (
                <Tab key={pm} value={pm}>
                  {pm}
                </Tab>
              ))}
            </TabList>
            <SyntaxHighlighter customStyle={{ maxHeight: 'none' }}>
              {installCommand[packageManager](name)}
            </SyntaxHighlighter>

            <DialogTitle
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              Code
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
    border: `solid 1px ${tokens.colorNeutralStroke3}`,
    padding: `${customTokens.size480} ${customTokens.size320}`,
    overflow: 'hidden',
    gridColumn: 'span 12 / span 12',
    '&:hover .component-preview-code-button, &:has(.component-preview-code-button:focus-visible) .component-preview-code-button':
      {
        opacity: 1,
      },
  },
  small: {
    gridColumn: 'span 12 / span 12',
    [breakpoints.sm]: {
      gridColumn: 'span 6 / span 6',
    },
    [breakpoints.lg]: {
      gridColumn: 'span 4 / span 4',
    },
  },
  medium: {
    gridColumn: 'span 12 / span 12',

    [breakpoints.md]: {
      gridColumn: 'span 6 / span 6',
    },
  },
  large: {
    gridColumn: 'span 12 / span 12',
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
