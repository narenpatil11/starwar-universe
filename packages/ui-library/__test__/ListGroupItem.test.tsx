import {expect, test, vi} from 'vitest';
import {render} from 'vitest-browser-react';
import {ListGroupItem} from '../lib';
import {userEvent} from "@vitest/browser/context";

test('should render with default "li" tag', () => {
    const {container} = render(<ListGroupItem/>);
    expect(container).toBeInTheDocument();
    expect(container.firstChild.tagName.toLocaleLowerCase()).toBe('li');
});

test('should apply "active" class when active is true', () => {
    const {container} = render(<ListGroupItem active/>);
    expect(container.firstChild).toHaveClass('active');
});

test('should apply "disabled" class when disabled is true', () => {
    const {container} = render(<ListGroupItem disabled/>);
    expect(container.firstChild).toHaveClass('disabled');
});

test('should prevent click event when disabled', async () => {
    const handleClick = vi.fn();
    const {container} = render(<ListGroupItem disabled onClick={handleClick}/>);
    await userEvent.click(container.firstChild);
    expect(handleClick).not.toHaveBeenCalled();
});

test('should apply "list-group-item-action" class when action is true', () => {
    const {container: {firstChild}} = render(<ListGroupItem action/>);
    expect(firstChild).toHaveClass('list-group-item-action');
});

test('should apply proper color class based on the "color" prop', () => {
    const {container: {firstChild}} = render(<ListGroupItem color="primary"/>);
    expect(firstChild).toHaveClass('list-group-item-primary');
});

test('should merge custom class names with Bootstrap classes', () => {
    const {container: {firstChild}} = render(<ListGroupItem className="custom-class"/>);
    expect(firstChild).toHaveClass('custom-class');
    expect(firstChild).toHaveClass('list-group-item');
});
