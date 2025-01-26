import {ReactNode, ButtonHTMLAttributes, JSX} from 'react';
import classNames from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: ReactNode;
    variant?: 'primary' | 'secondary'
}

const VARIANT_TYPES = Object.freeze({
    primary: 'btn-primary',
    secondary: 'btn-secondary',
});

/**
 * Button component that renders a customizable button element.
 *
 * @param {Object} props - The properties object passed to the Button component.
 * @param {string} props.label - The text to display inside the button.
 * @param {string} [props.variant='primary'] - The style variant of the button. Defaults to 'primary'.
 * @param {...Object} props - Additional properties to spread onto the button element.
 *
 * @returns {JSX.Element} A React JSX element representing the button.
 */
export const Button = ({ label, variant = 'primary', ...props }: ButtonProps): JSX.Element => {
    return (
        <button
            className={classNames('btn', [VARIANT_TYPES[variant], props?.className])}
            {...props}
        >
            {label}
        </button>
    );
};
