import {
  Caption1,
  Checkbox,
  Input,
  Label,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { useEffect, useId, useRef, useState } from 'react';

export default function Component() {
  const styles = useStyles();
  const id = useId();
  const descId = `${id}-description`;
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked) {
      inputRef.current?.focus();
    }
  }, [checked]);

  return (
    <div className={styles.root}>
      <Checkbox
        id={id}
        aria-describedby={descId}
        checked={checked}
        onChange={(_, data) => setChecked(data.checked === true)}
      />
      <div className={styles.body}>
        <div className={styles.text}>
          <Label htmlFor={id}>Checkbox with expansion</Label>
          <Caption1 id={descId} className={styles.description}>
            You can use this checkbox with a label and a description.
          </Caption1>
        </div>
        <div
          className={styles.expandable}
          data-state={checked ? 'expanded' : 'collapsed'}>
          <div className={styles.expandableInner}>
            <Input
              ref={inputRef}
              className={styles.input}
              disabled={!checked}
              placeholder='Enter details'
              aria-label='Additional Information'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: tokens.spacingHorizontalS,
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalXS,
  },
  description: {
    color: tokens.colorNeutralForeground3,
  },
  expandable: {
    display: 'grid',
    gridTemplateRows: '0fr',
    opacity: 0,
    transition: `grid-template-rows ${tokens.durationNormal} ${tokens.curveEasyEase}, opacity ${tokens.durationNormal} ${tokens.curveEasyEase}`,
    '&[data-state="expanded"]': {
      gridTemplateRows: '1fr',
      opacity: 1,
    },
  },
  expandableInner: {
    overflow: 'hidden',
  },
  input: {
    marginTop: tokens.spacingVerticalS,
    width: '100%',
  },
});
