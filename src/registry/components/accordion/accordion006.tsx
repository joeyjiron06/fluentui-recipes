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
  DarkThemeRegular,
  FlashRegular,
  MentionRegular,
} from '@fluentui/react-icons';

const items = [
  {
    id: '1',
    icon: AppsRegular,
    title: 'What makes Fluent UI different?',
    content:
      'Fluent UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.',
  },
  {
    id: '2',
    icon: DarkThemeRegular,
    title: 'How can I customize the components?',
    content:
      'Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.',
  },
  {
    id: '3',
    icon: FlashRegular,
    title: 'Is Fluent UI optimized for performance?',
    content:
      'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.',
  },
  {
    id: '4',
    icon: MentionRegular,
    title: 'How accessible are the components?',
    content:
      'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.',
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
              expandIconPosition='end'
              icon={<Icon className={styles.icon} />}
              expandIcon={<span className='fui-plus-minus' />}>
              {item.title}
            </AccordionHeader>
            <AccordionPanel className={styles.panel}>
              {item.content}
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
    '& .fui-plus-minus': {
      position: 'relative',
      width: '16px',
      height: '16px',
      flexShrink: 0,
      color: tokens.colorNeutralForeground3,
    },
    '& .fui-plus-minus::before, & .fui-plus-minus::after': {
      content: '""',
      position: 'absolute',
      backgroundColor: 'currentColor',
      borderRadius: tokens.borderRadiusSmall,
      transition: `opacity ${tokens.durationNormal} ${tokens.curveEasyEase}, transform ${tokens.durationNormal} ${tokens.curveEasyEase}`,
    },
    '& .fui-plus-minus::before': {
      top: '50%',
      left: '2px',
      right: '2px',
      height: '1.5px',
      transform: 'translateY(-50%)',
    },
    '& .fui-plus-minus::after': {
      left: '50%',
      top: '2px',
      bottom: '2px',
      width: '1.5px',
      transform: 'translateX(-50%)',
    },
    '& .fui-AccordionHeader__button[aria-expanded="true"] .fui-plus-minus::after':
      {
        opacity: 0,
        transform: 'translateX(-50%) rotate(90deg)',
      },
  },
  icon: {
    fontSize: '20px',
    color: tokens.colorNeutralForeground3,
  },
  panel: {
    color: tokens.colorNeutralForeground2,
    paddingBottom: tokens.spacingVerticalM,
  },
});
