import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { HomeRegular } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Breadcrumb aria-label='Breadcrumb inside a container'>
        <BreadcrumbItem>
          <BreadcrumbButton href='#' icon={<HomeRegular />} aria-label='Home' />
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton href='#'>Components</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton current>Breadcrumb</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    padding: `${tokens.spacingVerticalSNudge} ${tokens.spacingHorizontalM}`,
    boxShadow: tokens.shadow2,
  },
});
