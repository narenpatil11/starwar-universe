import {render} from 'vitest-browser-react';
import {expect, test} from "vitest";
import {ListGroup} from "../lib";

test("renders a default unordered list with the base class", () => {
    const {container} = render(<ListGroup/>);
    expect(container.firstChild).toHaveClass("list-group");
    expect(container.firstChild?.nodeName).toBe("UL");
});

test("applies custom className", () => {
    const {container} = render(<ListGroup className="custom-class"/>);
    expect(container.firstChild).toHaveClass("custom-class");
});

test("renders as a different tag based on the `tag` prop", () => {
    const {container} = render(<ListGroup tag="div"/>);
    expect(container.firstChild?.nodeName).toBe("DIV");
});

test("applies `list-group-numbered` class when numbered is true", () => {
    const {container} = render(<ListGroup numbered/>);
    expect(container.firstChild).toHaveClass("list-group-numbered");
});

test("applies `list-group-flush` class when flush is true", () => {
    const {container} = render(<ListGroup flush/>);
    expect(container.firstChild).toHaveClass("list-group-flush");
});

test("applies horizontal class when `horizontal` is true and flush is false", () => {
    const {container} = render(<ListGroup horizontal/>);
    expect(container.firstChild).toHaveClass("list-group-horizontal");
});

test("does not apply horizontal class if flush is true", () => {
    const {container} = render(<ListGroup flush horizontal/>);
    expect(container.firstChild).not.toHaveClass("list-group-horizontal");
});
