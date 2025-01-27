// import {ReactNode, ButtonHTMLAttributes, JSX} from 'react';
// import classNames from 'classnames';
//
// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     label: ReactNode;
//     variant?: 'primary' | 'secondary'
// }
//
// const VARIANT_TYPES = Object.freeze({
//     primary: 'btn-primary',
//     secondary: 'btn-secondary',
// });
//
// /**
//  * Button component that renders a customizable button element.
//  *
//  * @param {Object} props - The properties object passed to the Button component.
//  * @param {string} props.label - The text to display inside the button.
//  * @param {string} [props.variant='primary'] - The style variant of the button. Defaults to 'primary'.
//  * @param {...Object} props - Additional properties to spread onto the button element.
//  *
//  * @returns {JSX.Element} A React JSX element representing the button.
//  */
// export const Button = ({ label, variant = 'primary', ...props }: ButtonProps): JSX.Element => {
//     return (
//         <button
//             className={classNames('btn', [VARIANT_TYPES[variant], props?.className])}
//             {...props}
//         >
//             {label}
//         </button>
//     );
// };

import {ElementType, FC, JSX, MouseEventHandler, MouseEvent, Ref, useCallback} from 'react';
import classNames from 'classnames';
import {mapToCssModules} from '../utils';

export interface IButtonProps {
    /** Manually set the visual state of the button to active */
    active?: boolean;
    /** Aria label */
    'aria-label'?: string;
    /** Button will take up the full width of its container */
    block?: boolean;
    /** Pass children so this component can wrap them */
    children?: React.ReactNode;
    /** Add custom class */
    className?: string;
    /** Change existing class name with a new class name */
    cssModule?: Record<string, string>;
    /** Use the button as a close button */
    close?: boolean;
    /** Change color of the button */
    color?: string;
    /** Disable the button */
    disabled?: boolean;
    /** A reference for the button element */
    innerRef?: Ref<HTMLButtonElement | HTMLAnchorElement>;
    /** Function to be triggered when clicked */
    onClick?: MouseEventHandler<HTMLElement>;
    /** Adds outline to the button */
    outline?: boolean;
    /** Make the button bigger or smaller */
    size?: string;
    /** Make the button as anchor Tag and add href link */
    href?: string;
    /** Set a custom element for this component */
    tag?: ElementType;
}


/**
 * A functional component that renders a customizable Button element.
 *
 * This component supports various styles, behaviors, and configurations
 * including setting button type, color, size, block-level display, and
 * custom classes. It can also function as a semantic link if an href attribute is provided.
 *
 * The appearance and behavior of the button can be controlled using the provided props,
 * following the conventions of standard Bootstrap styling. It ensures that the appropriate
 * ARIA properties and class names are applied for accessibility and styling purposes.
 * Switching between `<button>` and `<a>` tags is dynamically handled based on the presence
 * of the `href` attribute or other conditions.
 */
export const Button: FC<IButtonProps> = (props): JSX.Element => {
    const onClick = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            if (props.disabled) {
                e.preventDefault();
                return;
            }

            if (props.onClick) {
                props.onClick(e);
            }
        },
        [props.onClick, props.disabled]
    );

    let {
        active,
        'aria-label': ariaLabel,
        block,
        className,
        close,
        cssModule,
        color = 'secondary',
        outline,
        size,
        tag: Tag = 'button',
        innerRef,
        href,
        ...attributes
    } = props;

    const btnOutlineColor = `btn${outline ? '-outline' : ''}-${color}`;

    const classes = mapToCssModules(
        classNames(
            className,
            'btn',
            btnOutlineColor,
            size ? `btn-${size}` : false,
            block ? 'd-block w-100' : false,
            {active, disabled: props.disabled}
        ),
        cssModule
    );

    if (href && Tag === 'button') {
        Tag = 'a';
    }

    return (
        <Tag
            type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
            {...attributes}
            className={classes}
            ref={innerRef}
            onClick={onClick}
            aria-label={ariaLabel}
        />
    );
};
