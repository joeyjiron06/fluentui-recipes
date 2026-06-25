import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

const items = [
  {
    id: '1',
    title: 'What makes Fluent UI different?',
    collapsibles: [
      {
        title: 'What about performance?',
        content:
          'We optimize every component for maximum performance and minimal bundle size.',
      },
      {
        title: 'How is the documentation?',
        content:
          'Our documentation is comprehensive and includes live examples for every component.',
      },
    ],
  },
  {
    id: '2',
    title: 'How can I customize the components?',
    collapsibles: [
      {
        title: 'Can I use custom themes?',
        content:
          'Yes, our theming system is fully customizable and supports both light and dark modes.',
      },
      {
        title: 'What about Tailwind support?',
        content:
          'We have first-class support for Tailwind CSS with custom utility classes.',
      },
    ],
  },
  {
    id: '3',
    title: 'Is Fluent UI optimized for performance?',
    collapsibles: [
      {
        title: "What's the bundle size impact?",
        content:
          'Our components are tree-shakeable and typically add minimal overhead to your bundle.',
        open: true,
      },
      {
        title: 'How is code splitting handled?',
        content:
          'We support automatic code splitting for optimal loading performance.',
      },
    ],
  },
  {
    id: '4',
    title: 'How accessible are the components?',
    collapsibles: [
      {
        title: 'Which screen readers are supported?',
        content:
          'We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.',
      },
      {
        title: 'What about keyboard navigation?',
        content:
          'Full keyboard navigation support is implemented following WAI-ARIA best practices.',
      },
    ],
  },
];

export default function Component() {
  const styles = useStyles();
  return (
    <Accordion collapsible defaultOpenItems='3' className={styles.root}>
      {items.map((item) => (
        <AccordionItem value={item.id} key={item.id} className={styles.item}>
          <AccordionHeader
            expandIconPosition='end'
            className={styles.outerHeader}>
            {item.title}
          </AccordionHeader>
          <AccordionPanel className={styles.outerPanel}>
            <Accordion
              multiple
              collapsible
              defaultOpenItems={item.collapsibles
                .map((c, i) => (c.open ? `${item.id}-${i}` : ''))
                .filter(Boolean)}>
              {item.collapsibles.map((collapsible, index) => (
                <AccordionItem
                  value={`${item.id}-${index}`}
                  key={collapsible.title}
                  className={styles.innerItem}>
                  <AccordionHeader
                    expandIconPosition='start'
                    className={styles.innerHeader}>
                    {collapsible.title}
                  </AccordionHeader>
                  <AccordionPanel className={styles.innerPanel}>
                    {collapsible.content}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  item: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
    '&:not(:first-child)': {
      marginTop: '-1px',
    },
    '&:first-child': {
      borderTopLeftRadius: tokens.borderRadiusMedium,
      borderTopRightRadius: tokens.borderRadiusMedium,
    },
    '&:last-child': {
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
    },
  },
  outerHeader: {
    paddingInline: tokens.spacingHorizontalM,
  },
  outerPanel: {
    margin: 0,
  },
  innerItem: {
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
    paddingInline: tokens.spacingHorizontalM,
  },
  innerHeader: {
    fontWeight: tokens.fontWeightSemibold,
  },
  innerPanel: {
    color: tokens.colorNeutralForeground2,
    paddingBottom: tokens.spacingVerticalM,
  },
});
