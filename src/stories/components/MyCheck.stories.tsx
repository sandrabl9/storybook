import React from "react";
import {ComponentMeta, ComponentStory, storiesOf} from "@storybook/react";

import { MyCheckbox } from "../../components/MyCheck";


export default {
    title: 'UI/MyCheck',
    component: MyCheckbox,
    argTypes: {
        backgroundColor: {control: 'color'},
    }
} as ComponentMeta<typeof MyCheckbox>;

const Template: ComponentStory<typeof MyCheckbox> = (args) => <MyCheckbox { ...args }/>

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Checkbox',

};

export const Checked = Template.bind({});
Checked.args = {
    label: 'Checked Checkbox',
    checked: true,
}

