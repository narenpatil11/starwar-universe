import {render} from 'vitest-browser-react';
import {expect, test} from 'vitest';
import {Loader} from '../lib';

test('should render with default props', () => {
    const {container} = render(<Loader/>);
    expect(container.firstChild).toHaveClass('spinner-border');
    expect(container.firstChild).toHaveAttribute('role', 'status');
    expect(container.querySelector('.visually-hidden')).toHaveTextContent('Loading...');
});

test('should apply custom className', () => {
    const {container} = render(<Loader className="custom-class"/>);
    expect(container.firstChild).toHaveClass('custom-class');
});

test('should render with a custom spinner type', () => {
    const {container} = render(<Loader type="grow"/>);
    expect(container.firstChild).toHaveClass('spinner-grow');
});

test('should render with appended size class when size is provided', () => {
    const {container} = render(<Loader size="sm"/>);
    expect(container.firstChild).toHaveClass('spinner-border-sm');
});

test('should render with proper color class when color is provided', () => {
    const {container} = render(<Loader color="primary"/>);
    expect(container.firstChild).toHaveClass('text-primary');
});

test('should allow changing the tag via the "tag" prop', () => {
    const {container} = render(<Loader tag="span"/>);
    expect(container.firstChild?.nodeName).toBe('SPAN');
});

test('should display custom children text', () => {
    const {container} = render(<Loader>Custom Loading Text</Loader>);
    expect(container.querySelector('.visually-hidden')).toHaveTextContent('Custom Loading Text');
});

test('should spread additional attributes onto the root element', () => {
    const {container} = render(<Loader id="loader-id"/>);
    expect(container.firstChild).toHaveAttribute('id', 'loader-id');
});
