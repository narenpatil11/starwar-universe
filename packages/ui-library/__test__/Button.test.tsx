import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { Button } from "../lib";

test("renders with the correct label", async () => {
    const { getByText } = render(<Button label="Click me" variant="primary" />);
    await expect.element(getByText("Click me")).toBeInTheDocument();
});

test("applies the correct variant class", async () => {
    const { getByText } = render(<Button label="Click me" variant="secondary" />);
    const button = getByText("Click me");
    await expect.element(button).toHaveClass("btn");
    await expect.element(button).toHaveClass("btn-secondary");
});
