import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
} from '@fluentui/react-components';
import { HomeRegular } from '@fluentui/react-icons';

export default function Component() {
  return (
    <Breadcrumb aria-label='Breadcrumb with slash divider'>
      <BreadcrumbItem>
        <BreadcrumbButton href='#' icon={<HomeRegular />} aria-label='Home' />
      </BreadcrumbItem>
      <BreadcrumbDivider>/</BreadcrumbDivider>
      <BreadcrumbItem>
        <BreadcrumbButton href='#'>Components</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider>/</BreadcrumbDivider>
      <BreadcrumbItem>
        <BreadcrumbButton current>Breadcrumb</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
