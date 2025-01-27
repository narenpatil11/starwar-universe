import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';
import {Button, ButtonGroup} from '../lib';

describe('ButtonGroup', () => {
    it('renders with default props', () => {
        render(<ButtonGroup> <Button
            color="primary"
            outline
        >
            Sort By Name
        </Button>
            <Button
                color="primary"
                outline
            >
                Sort By Year
            </Button></ButtonGroup>);
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup).toBeInTheDocument();
        expect(buttonGroup).toHaveClass('btn-group');
    });
});
