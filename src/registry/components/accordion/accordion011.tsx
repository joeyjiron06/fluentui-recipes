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
    content:
      'Fluent UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.',
  },
  {
    id: '2',
    title: 'How can I customize the components?',
    content:
      'Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.',
  },
  {
    id: '3',
    title: 'Is Fluent UI optimized for performance?',
    content:
      'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.',
  },
  {
    id: '4',
    title: 'How accessible are the components?',
    content:
      'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.',
  },
];

export default function Component() {
  const styles = useStyles();
  return (
    <Accordion collapsible defaultOpenItems='3' className={styles.root}>
      {items.map((item) => (
        <AccordionItem value={item.id} key={item.id} className={styles.item}>
          <AccordionHeader expandIconPosition='end'>
            {item.title}
          </AccordionHeader>
          <AccordionPanel className={styles.panel}>
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
  },
  item: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
    paddingInline: tokens.spacingHorizontalM,
  },
  panel: {
    color: tokens.colorNeutralForeground2,
    paddingBottom: tokens.spacingVerticalM,
  },
});
