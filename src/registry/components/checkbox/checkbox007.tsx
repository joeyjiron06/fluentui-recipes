import { Checkbox, Link } from '@fluentui/react-components';

export default function Component() {
  return (
    <Checkbox
      label={
        <>
          I agree to the{' '}
          <Link href='#' target='_blank' rel='noreferrer'>
            terms of service
          </Link>
        </>
      }
    />
  );
}
