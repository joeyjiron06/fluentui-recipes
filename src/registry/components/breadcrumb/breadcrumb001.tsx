import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItemLink,
} from '@fluentui/react-components';
import { MoreHorizontalRegular } from '@fluentui/react-icons';

export default function Component() {
  return (
    <Breadcrumb aria-label='Breadcrumb with overflow menu'>
      <BreadcrumbItem>
        <BreadcrumbButton href='#'>Home</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <BreadcrumbButton
              icon={<MoreHorizontalRegular />}
              aria-label='Toggle menu'
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItemLink href='#'>Documentation</MenuItemLink>
              <MenuItemLink href='#'>Themes</MenuItemLink>
              <MenuItemLink href='#'>GitHub</MenuItemLink>
            </MenuList>
          </MenuPopover>
        </Menu>
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
  );
}
