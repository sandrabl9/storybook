import MyInput from "../../components/MyInput";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'UI/MyInput',
    component: MyInput,
    argTypes: {
        background: { control: 'color'},
        color: { control: 'color'},
        size: { control: 'select'}
    }

    } as ComponentMeta<typeof MyInput>

    const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />

export const Basic = Template.bind({});
Basic.args= {
    placeholder: 'Basic input',

};
export const CustomizeSize = Template.bind({});
CustomizeSize.args= {
    placeholder: 'Large input',
    size: 'large',
}
export const CustomizeColor = Template.bind({});
CustomizeColor.args= {
    backgroundColor: '#07d1f3',
    color: '#ff6434'
}