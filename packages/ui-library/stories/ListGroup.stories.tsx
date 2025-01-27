import {Meta, StoryFn} from '@storybook/react';
import {ListGroup, IListGroupProps, ListGroupItem} from '../lib'; // Adjust the import according to your file structure.

// Define the metadata for the story
export default {
    title: 'Components/ListGroup',
    component: ListGroup,
    tags: ['autodocs'],
    argTypes: {
        className: {control: 'text', description: 'Custom class for the list group.'},
        flush: {control: 'boolean', description: 'Removes borders to make the list appear flush.'},
        horizontal: {
            control: 'select',
            options: [false, true, 'sm', 'md', 'lg', 'xl', 'xxl', 'xs'],
            description: 'Makes the list horizontal, with optional responsive alignment.'
        },
        numbered: {control: 'boolean', description: 'Adds numbers to the list items.'},
        tag: {control: 'text', description: 'Custom tag to use for the element.'},
    },

} as Meta<IListGroupProps>;

// Template for the stories
const Template: StoryFn<IListGroupProps> = (args) => (
    <ListGroup {...args}>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>Item 3</ListGroupItem>
    </ListGroup>
);

// Template for the stories
const TemplateForActive: StoryFn<IListGroupProps> = (args) => (
    <ListGroup {...args}>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem active>Item 2</ListGroupItem>
        <ListGroupItem>Item 3</ListGroupItem>
    </ListGroup>
);

// Default story
export const Default = Template.bind({});
Default.args = {
    flush: false,
    horizontal: false,
    numbered: false,
};

// Story for active variant
export const Active = TemplateForActive.bind({});
Active.args = {
    flush: false,
    horizontal: false,
    numbered: false,
};

// Story for flush variant
export const Flush = Template.bind({});
Flush.args = {
    flush: true,
    horizontal: false,
    numbered: false,
};

// Story for horizontal variant
export const Horizontal = Template.bind({});
Horizontal.args = {
    horizontal: true,
    flush: false,
    numbered: false,
};

// Story for numbered list
export const Numbered = Template.bind({});
Numbered.args = {
    numbered: true,
    flush: false,
    horizontal: false,
};

// Story for custom tag
export const CustomTag = Template.bind({});
CustomTag.args = {
    tag: 'div',
    flush: false,
    numbered: false,
    horizontal: false,
};
CustomTag.storyName = 'Custom Tag (div)';
