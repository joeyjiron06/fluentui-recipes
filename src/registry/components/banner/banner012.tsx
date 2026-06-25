import {
  Button,
  MessageBar,
  MessageBarBody,
  Spinner,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ArrowDownloadRegular } from '@fluentui/react-icons';
import { useState } from 'react';

export default function Component() {
  const styles = useStyles();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <MessageBar className={styles.banner} icon={null}>
      <MessageBarBody className={styles.body}>
        <span className={styles.text}>
          <span className={styles.version}>v2.1.0</span>
          <span className={styles.dot}>•</span>
          New features and improvements available
        </span>
        <Button
          appearance='outline'
          size='small'
          disabled={isDownloading}
          icon={
            isDownloading ? <Spinner size='tiny' /> : <ArrowDownloadRegular />
          }
          onClick={handleDownload}
          className={styles.button}>
          {isDownloading ? 'Updating...' : 'Update now'}
        </Button>
      </MessageBarBody>
    </MessageBar>
  );
}

const useStyles = makeStyles({
  banner: {
    width: '100%',
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: tokens.spacingHorizontalL,
    rowGap: tokens.spacingVerticalS,
    fontSize: tokens.fontSizeBase200,
  },
  text: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  version: {
    fontWeight: tokens.fontWeightMedium,
  },
  dot: {
    color: tokens.colorNeutralForeground3,
  },
  button: {
    minWidth: '6rem',
  },
});
