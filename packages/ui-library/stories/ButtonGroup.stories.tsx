import {Meta, StoryFn} from '@storybook/react';
import {Button, ButtonGroup, IButtonGroupProps} from '../lib';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    tags: ['autodocs'],

    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['default', 'sm', 'lg'],
            description: 'Size of the button group. Can be "sm" for small or "lg" for large.',
        },
        vertical: {
            control: {type: 'boolean'},
            description: 'Whether the button group should be oriented vertically.',
        },
        className: {
            control: 'text',
            description: 'Custom CSS class for additional styling.',
        },
        tag: {
            control: 'text',
            description: 'Custom tag for the outer container (default is "div").',
        },
        'aria-label': {
            control: 'text',
            description: 'Accessibility label for the button group.',
        },
    },
} as Meta<IButtonGroupProps>;

const Template: StoryFn<IButtonGroupProps> = (args) => (
    <ButtonGroup {...args}>
        <Button color="primary">
            Button 1
        </Button>
        <Button color="secondary">
            Button 2
        </Button>
        <Button color="success">
            Button 3
        </Button>
    </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
    size: undefined,
    vertical: false,
    'aria-label': 'Default Button Group',
};

export const Small = Template.bind({});
Small.args = {
    size: 'sm',
    vertical: false,
    'aria-label': 'Small Button Group',
};

export const Large = Template.bind({});
Large.args = {
    size: 'lg',
    vertical: false,
    'aria-label': 'Large Button Group',
};

export const Vertical = Template.bind({});
Vertical.args = {
    size: undefined,
    vertical: true,
    'aria-label': 'Vertical Button Group',
};
