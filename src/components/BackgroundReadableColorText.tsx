import React from 'react';
import { HookProps, 
  useBackgroundReadableColor 
} from '../hooks/useBackgroundReadableColor';
import { useBackgroundReadableColorMemo } from '../hooks/useBackgroundReadableColorMemo';

interface Props extends HookProps {
    children: string;
    render: any;
    useMemo?: boolean;
}

export const BackgroundReadableColorText: React.FC<Props> = (props) => {
    const Component = props.render;
    const hook = React.useMemo(() => props.useMemo ? useBackgroundReadableColorMemo : useBackgroundReadableColor, []);
    const color = hook(props);
    return (
        <Component style={color && {color}}>
            {props.children}
        </Component>
    );
};