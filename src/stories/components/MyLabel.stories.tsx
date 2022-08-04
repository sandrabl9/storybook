import {ComponentMeta, ComponentStory} from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {control: 'select'},
        fontColor: {control: 'color'}
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
    label: "Default label",
    size: 'normal',
    allCaps: false //Capitalizar el texto de la etiqueta

};

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: "Caps label",
    size: 'normal',
    allCaps: true
};


export const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary label",
    color: 'secondary'
}


export const Tertiary = Template.bind({});
Tertiary.args = {
    label: "Tertiary Label",
    color: 'tertiary'
}

export const CustomizeColor = Template.bind({});
CustomizeColor.args = {
    label: "Customize COLOR label",
    fontColor: '#73812a'
}
