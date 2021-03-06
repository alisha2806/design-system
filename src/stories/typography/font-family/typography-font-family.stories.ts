import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import TypographyFontFamilyComponent from './typography-font-family.component';

export default {
  title: 'Principles/Typography/Fonts',
  component: TypographyFontFamilyComponent,
  decorators: [
    moduleMetadata({
      declarations: [TypographyFontFamilyComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TypographyFontFamilyComponent> = (args: TypographyFontFamilyComponent) => ({
  props: args,
});

export const Fonts = Template.bind({});
Fonts.args = {};
