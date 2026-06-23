import {
  Button,
  makeStyles,
  tokens,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Text,
  Checkbox,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from '@fluentui/react-components';
import { useId } from 'react';
import {
  Home16Regular,
  CalendarLtr16Regular,
  Filter16Regular,
  Bookmark16Regular,
} from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbButton href='#' icon={<Home16Regular />} aria-label='Home' />
          </BreadcrumbItem>
          <BreadcrumbDivider />
          <BreadcrumbItem>
            <BreadcrumbButton current>Reports</BreadcrumbButton>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className={styles.rightSection}>
          <DatePicker />
          <Filters />
          <Button appearance='outline' size='small' icon={<Bookmark16Regular />} className={styles.saved}>
            Saved
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function DatePicker() {
  return (
    <Button appearance='outline' size='small' icon={<CalendarLtr16Regular />}>
      Date
    </Button>
  );
}

export function Filters() {
  const styles = useStyles();
  const id = useId();
  const options = ['Real Time', 'Top Channels', 'Last Orders', 'Total Spent'];

  return (
    <Popover positioning='below-end'>
      <PopoverTrigger disableButtonEnhancement>
        <Button appearance='outline' size='small' icon={<Filter16Regular />}>
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverSurface className={styles.filterSurface}>
        <Text weight='semibold' size={200}>
          Filters
        </Text>
        <div className={styles.filterList}>
          {options.map((opt, i) => (
            <Checkbox key={opt} id={`${id}-${i}`} label={opt} />
          ))}
        </div>
        <Divider />
        <div className={styles.filterActions}>
          <Button appearance='outline' size='small'>
            Clear
          </Button>
          <Button appearance='primary' size='small'>
            Apply
          </Button>
        </div>
      </PopoverSurface>
    </Popover>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  container: {
    display: 'flex',
    height: '64px',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: tokens.spacingHorizontalM,
    padding: `0 ${tokens.spacingHorizontalL}`,
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
  },
  saved: {
    flexShrink: 0,
  },
  filterSurface: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
    width: '180px',
  },
  filterList: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  filterActions: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalS,
  },
});
