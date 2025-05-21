import React from "react";
import { Button, tokens, Tooltip } from "@fluentui/react-components";
import { CopyRegular, CheckmarkFilled } from "@fluentui/react-icons";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  text: string;
};
export default function CopyButton({ text, className, style }: Props) {
  const [success, setSuccess] = useTimedState<boolean>(false);

  const buttonClicked = useCallback(() => {
    async function copyToClipboard() {
      try {
        await navigator.clipboard.writeText(text);
        setSuccess(true, false, 2000);
      } catch (error) {
        console.error(error);
      }
    }

    copyToClipboard().catch(() => {});
  }, [text, setSuccess]);

  const ContainerComponent = success ? React.Fragment : Tooltip;

  return (
    <ContainerComponent
      // @ts-expect-error i know
      content="Copy"
    >
      <Button
        className={className}
        appearance="transparent"
        style={style}
        icon={
          success ? (
            <CheckmarkFilled
              style={{
                color: tokens.colorStatusSuccessForegroundInverted,
              }}
            />
          ) : (
            <CopyRegular
              style={{
                color: tokens.colorNeutralForegroundInverted,
              }}
            />
          )
        }
        aria-label="copy code"
        onClick={buttonClicked}
      ></Button>
    </ContainerComponent>
  );
}

type SetTimedState<T> = (newValue: T, nextValue: T, durationMs: number) => void;

function useTimedState<T>(defaultValue: T): [T, SetTimedState<T>] {
  const [state, setState] = useState<T>(defaultValue);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const setTimedState = useCallback(
    (newValue: T, nextValue: T, durationMs: number) => {
      setState(newValue);

      const currentTimeout = timeoutRef.current;

      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }

      timeoutRef.current = setTimeout(() => {
        setState(nextValue);
      }, durationMs);
    },
    [setState]
  );

  useEffect(() => {
    return function onUnmount() {
      const currentTimeout = timeoutRef.current;

      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
  }, []);

  return [state, setTimedState];
}
