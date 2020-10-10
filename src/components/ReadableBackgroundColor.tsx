import React from 'react';
import { HookProps, useBackgroundReadableColor } from '../hooks/useBackgroundReadableColor';
import { useBackgroundReadableColorMemo } from '../hooks/useBackgroundReadableColorMemo';

interface Props extends HookProps {
  render: (color?: string) => React.ReactNode;
  useMemo?: boolean;
}

export const ReadableBackgroundColor: React.FC<Props> = (props) => {
  const hook = React.useMemo(() => props.useMemo ? useBackgroundReadableColorMemo : useBackgroundReadableColor, []);
  return <>{props.render(hook(props))}</>;
};