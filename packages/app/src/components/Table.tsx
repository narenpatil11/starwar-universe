import {ElementType, FC, Ref} from 'react';
import classNames from 'classnames';
import {mapToCssModules} from './utils';

export interface TableProps {
    /** Adds border to all sides of table */
    bordered?: boolean;
    /** Removes all borders */
    borderless?: boolean;
    /** Adds custom class name to the component */
    className?: string;
    /** Pass cssModule object for scoped styles */
    cssModule?: Record<string, string>;
    /** Makes the table dark */
    dark?: boolean;
    /** Enables a hover state on the rows within `<tbody>` */
    hover?: boolean;
    /** Pass a reference to the underlying table element */
    innerRef?: Ref<HTMLTableElement>;
    /** Responsive tables allow tables to be scrolled horizontally with ease */
    responsive?: boolean | string;
    /** Make the responsive wrapper a custom element */
    responsiveTag?: ElementType;
    /** Make tables more compact by cutting cell padding in half when size is `sm` */
    size?: 'sm' | 'lg' | string;
    /** Adds zebra-striping to any table row within the `<tbody>` */
    striped?: boolean;
    /** Add a custom tag to the component */
    tag?: ElementType;
}

/**
 * Renders a table component with various supporting features including sizing, styling,
 * and responsiveness. This component supports custom class names, CSS modules, and
 * configurable tags for the table and its responsive wrapper.
 */
export const Table: FC<TableProps> = (props) => {
    const {
        className,
        cssModule,
        size,
        bordered,
        borderless,
        striped,
        dark,
        hover,
        responsive,
        tag: Tag = 'table',
        responsiveTag: ResponsiveTag = 'div',
        innerRef,
        ...attributes
    } = props;

    const classes = mapToCssModules(
        classNames(
            className,
            'table',
            size ? 'table-' + size : false,
            bordered ? 'table-bordered' : false,
            borderless ? 'table-borderless' : false,
            striped ? 'table-striped' : false,
            dark ? 'table-dark' : false,
            hover ? 'table-hover' : false,
        ),
        cssModule
    );

    const table = <Tag {...attributes} ref={innerRef} className={classes}/>;

    if (responsive) {
        const responsiveClassName = mapToCssModules(
            responsive === true
                ? 'table-responsive'
                : `table-responsive-${responsive}`,
            cssModule
        );
        return (
            <ResponsiveTag className={responsiveClassName}>{table}</ResponsiveTag>
        );
    }

    return table;
};
