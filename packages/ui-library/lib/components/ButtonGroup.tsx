import {ElementType, JSX} from "react";
import classNames from 'classnames';
import {mapToCssModules,} from '../utils';

export interface IButtonGroupProps {
    /** Aria label */
    'aria-label'?: string;
    /** Add custom class */
    className?: string;
    /** Change underlying component's CSS base class name */
    cssModule?: Record<string, any>;
    /** In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be role="group", while toolbars should have a role="toolbar". */
    role?: string;
    /** Make the button bigger or smaller */
    size?: string;
    /** Make button group vertical */
    vertical?: boolean;
    /** Custom tag */
    tag?: ElementType;

    children: JSX.Element | JSX.Element[];
}

/**
 * A functional component that renders a group of buttons with optional styling, size, and orientation.
 */
export function ButtonGroup(props: IButtonGroupProps) {
    const {
        className,
        cssModule,
        size,
        vertical,
        tag: Tag = 'div',
        ...attributes
    } = props;

    const classes = mapToCssModules(
        classNames(
            className,
            size ? 'btn-group-' + size : false,
            vertical ? 'btn-group-vertical' : 'btn-group',
        ),
        cssModule,
    );

    return <Tag {...{role: 'group', ...attributes}} className={classes}/>;
}


