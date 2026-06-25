import {
  Button,
  MessageBar,
  MessageBarActions,
  MessageBarBody,
  MessageBarTitle,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { DismissRegular, TagPercentRegular } from '@fluentui/react-icons';
import { useEffect, useState } from 'react';

// Define the sale end date - eg: new Date('2024-12-31T23:59:59');
const saleEndDate = new Date(
  Date.now() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000 + 24 * 1000,
); // Setting 9h 45m 24s from now for demo purposes

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function Component() {
  const styles = useStyles();
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    isExpired: false,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = saleEndDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          isExpired: true,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, isExpired: false, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible || timeLeft.isExpired) return null;

  return (
    <MessageBar
      className={styles.banner}
      icon={
        <span aria-hidden className={styles.iconCircle}>
          <TagPercentRegular fontSize={16} />
        </span>
      }>
      <MessageBarBody className={styles.body}>
        <MessageBarTitle>Black Friday Sale!</MessageBarTitle>
        <span className={styles.description}>
          It kicks off today and is available for just 24 hours—don&lsquo;t miss
          out!
        </span>
      </MessageBarBody>
      <MessageBarActions
        containerAction={
          <Button
            appearance='transparent'
            size='small'
            icon={<DismissRegular />}
            aria-label='Close banner'
            onClick={() => setIsVisible(false)}
          />
        }>
        <div className={styles.timer}>
          {timeLeft.days > 0 && (
            <span className={styles.timerUnit}>
              {timeLeft.days}
              <span className={styles.timerLabel}>d</span>
            </span>
          )}
          <span className={styles.timerUnit}>
            {timeLeft.hours.toString().padStart(2, '0')}
            <span className={styles.timerLabel}>h</span>
          </span>
          <span className={styles.timerUnit}>
            {timeLeft.minutes.toString().padStart(2, '0')}
            <span className={styles.timerLabel}>m</span>
          </span>
          <span className={styles.timerUnit}>
            {timeLeft.seconds.toString().padStart(2, '0')}
            <span className={styles.timerLabel}>s</span>
          </span>
        </div>
        <Button appearance='primary' size='small'>
          Buy now
        </Button>
      </MessageBarActions>
    </MessageBar>
  );
}

const useStyles = makeStyles({
  banner: {
    width: '100%',
  },
  body: {
    fontSize: tokens.fontSizeBase200,
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.25rem',
    height: '2.25rem',
    borderRadius: tokens.borderRadiusCircular,
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
  timer: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorBrandBackground2,
    fontVariantNumeric: 'tabular-nums',
    fontSize: tokens.fontSizeBase200,
  },
  timerUnit: {
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${tokens.spacingHorizontalS}`,
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    ':last-child': {
      borderRight: 'none',
    },
  },
  timerLabel: {
    color: tokens.colorNeutralForeground3,
  },
});
