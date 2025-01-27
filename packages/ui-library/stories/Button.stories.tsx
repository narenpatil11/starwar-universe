import {Meta, StoryFn} from '@storybook/react';
import {Button, IButtonProps} from '../lib'; // Adjust the import path if needed

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'}, // Action to log clicks in Storybook
        color: {
            control: {type: 'select'},
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
        },
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
        },
        outline: {control: 'boolean'}, // Boolean toggle in Storybook
        block: {control: 'boolean'},
        disabled: {control: 'boolean'},
    },
} as Meta<typeof Button>;

// Template for the story
const Template: StoryFn<IButtonProps> = (args) => {
    return (<Button {...args}>Button</Button>);
};


// Default button story
export const Default = Template.bind({});
Default.args = {
    color: 'primary',
    size: 'md',
    outline: false,
    block: false,
    disabled: false,
};

// Button with outline variant
export const Outline = Template.bind({});
Outline.args = {
    color: 'secondary',
    outline: true,
};

// Button with block-level display
export const Block = Template.bind({});
Block.args = {
    color: 'success',
    block: true,
};

// Button with custom size
export const Large = Template.bind({});
Large.args = {
    color: 'info',
    size: 'lg',
};

// Disabled button
export const Disabled = Template.bind({});
Disabled.args = {
    color: 'danger',
    disabled: true,
};

// Button styled as a link
export const LinkButton = Template.bind({});
LinkButton.args = {
    href: 'https://example.com',
    color: 'primary',
};
