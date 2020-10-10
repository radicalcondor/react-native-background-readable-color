import { useMemo } from 'react';
import { HookProps, useBackgroundReadableColor } from './useBackgroundReadableColor';

export const useBackgroundReadableColorMemo = (props: HookProps) => 
    useMemo(() => useBackgroundReadableColor(props), [props.backgroundColor, props.presetName]);
  