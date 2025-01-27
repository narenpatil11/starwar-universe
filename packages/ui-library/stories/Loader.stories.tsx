import {Meta, StoryFn} from '@storybook/react';
import {Loader, ILoaderProps} from '../lib'; // Adjust the path based on your actual file structure

export default {
    title: 'Components/Loader',
    component: Loader,
    parameters: {layout: 'centered',},
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['border', 'grow'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', undefined],
            },
        },
        color: {
            control: {
                type: 'select',
                options: [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ],
            },
        },
        tag: {
            control: {
                type: 'text',
            },
        },
        className: {
            control: {
                type: 'text',
            },
        },
        children: {
            control: {
                type: 'text',
            },
        },
    },
} as Meta<ILoaderProps>;

const Template: StoryFn<ILoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'border',
    size: undefined,
    color: 'primary',
    children: 'Loading...',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    type: 'border',
    size: 'sm',
    color: 'success',
    children: 'Loading...',
};

export const GrowSpinner = Template.bind({});
GrowSpinner.args = {
    type: 'grow',
    color: 'warning',
    children: 'Loading...',
};

export const CustomTag = Template.bind({});
CustomTag.args = {
    tag: 'span',
    color: 'dark',
    children: 'Loading spinner in span tag',
};
