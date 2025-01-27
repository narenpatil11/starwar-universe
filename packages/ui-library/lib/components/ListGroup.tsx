import {ElementType, FC, JSX} from 'react';
import classNames from 'classnames';
import {mapToCssModules} from '../utils';

/**
 * Props interface for the ListGroup component.
 */
export interface IListGroupProps {
    /** Add custom class */
    className?: string;
    /** Change underlying component's CSS base class name */
    cssModule?: Record<string, string>;
    /** Remove borders to make the list appear flush */
    flush?: boolean;
    /** Make the list horizontal instead of vertical */
    horizontal?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xs';
    /** Add number to the ListItems */
    numbered?: boolean;
    /** Set a custom element for this component */
    tag?: ElementType;

    children: JSX.Element | JSX.Element[];
}

/**
 * Determines the CSS class for horizontal alignment based on the input value.
 *
 * @param {boolean | string | undefined} horizontal - Indicates the horizontal alignment setting.
 *        - `false`: Returns false indicating no horizontal class is applied.
 *        - `true` or `'xs'`: Returns the base class `'list-group-horizontal'`.
 *        - Any other string value: Returns a class in the format `'list-group-horizontal-{value}'`.
 *        - `undefined`: Defaults to no specific horizontal class.
 * @returns {string | false} The appropriate horizontal CSS class or false if not applicable.
 */
const getHorizontalClass = (horizontal: boolean | string | undefined): string | false => {
    if (horizontal === false) {
        return false;
    }
    if (horizontal === true || horizontal === 'xs') {
        return 'list-group-horizontal';
    }
    return `list-group-horizontal-${horizontal}`;
};

/**
 * ListGroup is a functional component that renders a list group element using the specified properties.
 * It allows for customization through class names, CSS modules, and other attributes.
 * Note:
 * - The `list-group-horizontal` class cannot be combined with `list-group-flush`.
 */
export const ListGroup: FC<IListGroupProps> = (props): JSX.Element => {
    const {
        className,
        cssModule,
        tag: Tag = 'ul',
        flush = false,
        horizontal = false,
        numbered = false,
        ...attributes
    } = props;

    const classes = mapToCssModules(
        classNames(
            className,
            'list-group',
            // list-group-horizontal cannot currently be mixed with list-group-flush
            // we only try to apply horizontal classes if flush is false
            flush ? 'list-group-flush' : getHorizontalClass(horizontal),
            {
                'list-group-numbered': numbered,
            }
        ),
        cssModule
    );

    return <Tag {...attributes} className={classes}/>;
};
