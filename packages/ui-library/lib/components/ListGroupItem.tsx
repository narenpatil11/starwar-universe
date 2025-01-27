import {ElementType, FC, MouseEvent} from 'react';
import classNames from 'classnames';
import {mapToCssModules} from '../utils';

/**
 * Properties for configuring a list group item component.
 */
export interface IListGroupItemProps {
    /** Add action prop to give effects while hovering over element */
    action?: boolean;
    /** Add active prop to make the current selection active */
    active?: boolean;
    /** Add custom class */
    className?: string;
    /** Change underlying component's CSS base class name */
    cssModule?: Record<string, string>;
    /** Add background color to the list item */
    color?: string;
    /** Make the list item appear disabled */
    disabled?: boolean;
    /** Set a custom element for this component */
    tag?: ElementType;

    /** Allow any additional attributes */
    [key: string]: any;
}

const handleDisabledOnClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
    e.preventDefault();
};

/**
 * A functional component that represents a single item within a list group.
 *
 * This component allows for a variety of customization options, such as
 * custom tags, CSS modules, action styling, and color variation, as well as
 * support for active or disabled states. It uses Bootstrap's styling conventions
 * for list group items and provides classes accordingly.
 *
 */
export const ListGroupItem: FC<IListGroupItemProps> = (props) => {
    const {
        className,
        cssModule,
        tag: Tag = 'li',
        active,
        disabled,
        action,
        color,
        ...attributes
    } = props;

    const classes = mapToCssModules(
        classNames(
            className,
            active ? 'active' : false,
            disabled ? 'disabled' : false,
            action ? 'list-group-item-action' : false,
            color ? `list-group-item-${color}` : false,
            'list-group-item',
        ),
        cssModule,
    );

    // Prevent click event when disabled.
    if (disabled) {
        attributes.onClick = handleDisabledOnClick;
    }

    return <Tag {...attributes} className={classes}/>;
};

