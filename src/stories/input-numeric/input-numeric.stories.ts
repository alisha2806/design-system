// import {moduleMetadata} from '@storybook/angular';
// import {CommonModule} from '@angular/common';
// import {Story, Meta} from '@storybook/angular/types-6-0';
// import InputNumericComponent from './input-numeric.component';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {ReactiveFormsModule, Validators} from '@angular/forms';
//
// export default {
//   title: 'Components/Numeric',
//   component: InputNumericComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [InputNumericComponent],
//       imports: [CommonModule,
//         MatInputModule,
//         BrowserAnimationsModule,
//         MatFormFieldModule,
//         ReactiveFormsModule],
//     }),
//   ],
// } as Meta;
//
// const Template: Story<InputNumericComponent> = (args: InputNumericComponent) => ({
//   props: args,
// });
//
// export const NoLabel = Template.bind({});
// NoLabel.args = {
//   ariaLabel: 'Label',
//   value: 100,
//   validators: Validators.required
// };
//
// export const WithLabel = Template.bind({});
// WithLabel.args = {
//   label: 'Label',
//   value: 100,
//   validators: Validators.required
// };
//
// // export const ErrorState = Template.bind({});
// // ErrorState.args = {
// //   label: 'Label',
// //   value: '',
// //   validators: Validators.required
// // };
// //
// // export const ErrorMessage = Template.bind({});
// // ErrorMessage.args = {
// //   label: 'Label',
// //   value: '',
// //   validators: Validators.required,
// //   errorMessage: 'Validation text'
// // };
//
