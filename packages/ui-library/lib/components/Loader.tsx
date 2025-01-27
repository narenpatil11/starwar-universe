import {ElementType, FC, ReactNode} from 'react';
import classNames from 'classnames';
import {mapToCssModules} from '../utils';

/**
 * Interface representing the props for the Loader component.
 */
export interface ILoaderProps {
    /** Set a custom element for this component */
    tag?: ElementType;
    /** Change animation of spinner */
    type?: 'border' | 'grow';
    /** Change size of spinner */
    size?: 'sm';
    /** Change color of spinner */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    /** Add custom class */
    className?: string;
    /** Change existing className with a new className (for CSS Modules) */
    cssModule?: Record<string, string>;
    /** Pass children so this component can wrap the child elements */
    children?: ReactNode;
}

/**
 * Loader is a functional component that renders a customizable loading spinner.
 * It supports various spinner types, sizes, and colors, as well as additional customizations.
 */
export const Loader: FC<ILoaderProps> = (props) => {
    const {
        className,
        cssModule,
        type = 'border',
        size,
        color,
        children = 'Loading...',
        tag: Tag = 'div',
        ...attributes
    } = props;

    const classes = mapToCssModules(
        classNames(
            className,
            size ? `spinner-${type}-${size}` : false,
            `spinner-${type}`,
            color ? `text-${color}` : false
        ),
        cssModule
    );

    return (
        <Tag role="status" {...attributes} className={classes}>
            {children && (
                <span className={mapToCssModules('visually-hidden', cssModule)}>
                    {children}
                </span>
            )}
        </Tag>
    );
};

