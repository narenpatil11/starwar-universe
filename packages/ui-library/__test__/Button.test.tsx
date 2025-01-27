import {expect, test} from 'vitest';
import {render} from 'vitest-browser-react';
import {Button} from "../lib";

test("renders with the correct label", async () => {
    const {getByText} = render(<Button color="primary">Click me</Button>);
    await expect.element(getByText("Click me")).toBeInTheDocument();
});

test("applies the correct variant class", async () => {
    const {getByText} = render(<Button color="secondary">Click me</Button>);
    const button = getByText("Click me");
    await expect.element(button).toHaveClass(" btn btn-secondary");
});
