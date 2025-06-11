import {
  Body1,
  makeStyles,
  mergeClasses,
  Title1,
  tokens,
} from '@fluentui/react-components';
import BasicLayout from './basicLayout';

type Props = React.PropsWithChildren & {
  title: string;
  description: string;
};

export default function ComponentsLayout({
  children,
  title,
  description,
}: Props) {
  const styles = useStyles();

  return (
    <BasicLayout className={mergeClasses('container', styles.root)}>
      <hgroup className={styles.header}>
        <Title1>{title}</Title1>
        <Body1>{description}</Body1>
      </hgroup>

      <div className={styles.componentPreviewGrid}>{children}</div>
    </BasicLayout>
  );
}

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: tokens.spacingVerticalM,
    marginTop: tokens.spacingVerticalXXXL,
    marginBottom: tokens.spacingVerticalXXXL,
  },
  componentPreviewGrid: {
    overflow: 'hidden',
    gap: 0,
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',

    '::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      border: `solid 2px ${tokens.colorNeutralBackground1}`,
      zIndex: 1,
      pointerEvents: 'none',
    },
  },
});
