import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Dropdown,
  Option,
  makeStyles,
} from '@fluentui/react-components';
import { DatabaseRegular } from '@fluentui/react-icons';

export default function Component() {
  const styles = useStyles();

  return (
    <Breadcrumb aria-label='Breadcrumb with database selector'>
      <BreadcrumbItem>
        <BreadcrumbButton href='#'>Databases</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <Dropdown
          aria-label='Select database'
          defaultValue='Orion'
          defaultSelectedOptions={['Orion']}
          button={{
            icon: <DatabaseRegular />,
          }}
          className={styles.dropdown}>
          <Option>Orion</Option>
          <Option>Sigma</Option>
          <Option>Dorado</Option>
        </Dropdown>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

const useStyles = makeStyles({
  dropdown: {
    minWidth: '160px',
  },
});
