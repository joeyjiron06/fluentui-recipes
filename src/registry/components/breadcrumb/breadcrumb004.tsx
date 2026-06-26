import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
} from '@fluentui/react-components';
import { HomeRegular, AppsRegular } from '@fluentui/react-icons';

export default function Component() {
  return (
    <Breadcrumb aria-label='Breadcrumb with icons and labels'>
      <BreadcrumbItem>
        <BreadcrumbButton href='#' icon={<HomeRegular />}>
          Home
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton href='#' icon={<AppsRegular />}>
          Components
        </BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton current>Breadcrumb</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
