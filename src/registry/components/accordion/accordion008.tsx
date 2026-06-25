import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Body1Strong,
  Caption1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

const items = [
  {
    id: '1',
    title: 'Connected accounts',
    sub: 'Manage your linked social and work accounts',
    content:
      'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.',
  },
  {
    id: '2',
    title: 'Notifications',
    sub: 'Customize your notification preferences',
    content:
      'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications on your devices.',
  },
  {
    id: '3',
    title: '2-step verification',
    sub: 'Add an extra layer of security to your account',
    content:
      'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.',
  },
  {
    id: '4',
    title: 'Contact support',
    sub: "We're here to help 24/7",
    content:
      'Our support team is available around the clock to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.',
  },
];

export default function Component() {
  const styles = useStyles();
  return (
    <Accordion collapsible defaultOpenItems='3' className={styles.root}>
      {items.map((item) => (
        <AccordionItem value={item.id} key={item.id}>
          <AccordionHeader
            expandIconPosition='end'
            expandIcon={<span className='fui-plus-minus' />}>
            <span className={styles.heading}>
              <Body1Strong>{item.title}</Body1Strong>
              <Caption1 className={styles.sub}>{item.sub}</Caption1>
            </span>
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
  heading: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXXS,
    textAlign: 'left',
  },
  sub: {
    color: tokens.colorNeutralForeground3,
  },
  panel: {
    color: tokens.colorNeutralForeground2,
    paddingBottom: tokens.spacingVerticalM,
  },
});
