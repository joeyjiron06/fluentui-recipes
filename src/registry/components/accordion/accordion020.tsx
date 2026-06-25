import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import {
  AppsRegular,
  CircleHintRegular,
  DarkThemeRegular,
  FlashRegular,
  GaugeRegular,
  MentionRegular,
} from '@fluentui/react-icons';

const items = [
  {
    id: '1',
    icon: AppsRegular,
    title: 'What makes Fluent UI different?',
    collapsibles: [
      {
        icon: GaugeRegular,
        title: 'What about performance?',
        content:
          'We optimize every component for maximum performance and minimal bundle size.',
      },
      {
        icon: CircleHintRegular,
        title: 'How is the documentation?',
        content:
          'Our documentation is comprehensive and includes live examples for every component.',
      },
    ],
  },
  {
    id: '2',
    icon: DarkThemeRegular,
    title: 'How can I customize the components?',
    collapsibles: [
      {
        icon: GaugeRegular,
        title: 'Can I use custom themes?',
        content:
          'Yes, our theming system is fully customizable and supports both light and dark modes.',
      },
      {
        icon: CircleHintRegular,
        title: 'What about Tailwind support?',
        content:
          'We have first-class support for Tailwind CSS with custom utility classes.',
      },
    ],
  },
  {
    id: '3',
    icon: FlashRegular,
    title: 'Is Fluent UI optimized for performance?',
    collapsibles: [
      {
        icon: GaugeRegular,
        title: "What's the bundle size impact?",
        content:
          'Our components are tree-shakeable and typically add minimal overhead to your bundle.',
        open: true,
      },
      {
        icon: CircleHintRegular,
        title: 'How is code splitting handled?',
        content:
          'We support automatic code splitting for optimal loading performance.',
      },
    ],
  },
  {
    id: '4',
    icon: MentionRegular,
    title: 'How accessible are the components?',
    collapsibles: [
      {
        icon: GaugeRegular,
        title: 'Which screen readers are supported?',
        content:
          'We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.',
      },
      {
        icon: CircleHintRegular,
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
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionHeader
              expandIconPosition='start'
              icon={<Icon className={styles.icon} />}>
              {item.title}
            </AccordionHeader>
            <AccordionPanel className={styles.outerPanel}>
              <Accordion
                multiple
                collapsible
                defaultOpenItems={item.collapsibles
                  .map((c, i) => (c.open ? `${item.id}-${i}` : ''))
                  .filter(Boolean)}>
                {item.collapsibles.map((collapsible, index) => {
                  const InnerIcon = collapsible.icon;
                  return (
                    <AccordionItem
                      value={`${item.id}-${index}`}
                      key={collapsible.title}
                      className={styles.innerItem}>
                      <AccordionHeader
                        expandIconPosition='start'
                        className={styles.innerHeader}
                        icon={<InnerIcon className={styles.icon} />}>
                        {collapsible.title}
                      </AccordionHeader>
                      <AccordionPanel className={styles.innerPanel}>
                        {collapsible.content}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  icon: {
    fontSize: '20px',
    color: tokens.colorNeutralForeground3,
  },
  outerPanel: {
    margin: 0,
    paddingLeft: '28px',
  },
  innerItem: {
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  innerHeader: {
    fontWeight: tokens.fontWeightSemibold,
  },
  innerPanel: {
    color: tokens.colorNeutralForeground2,
    paddingBottom: tokens.spacingVerticalM,
  },
});
