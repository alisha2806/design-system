// import {moduleMetadata} from '@storybook/angular';
// import {CommonModule} from '@angular/common';
// import {Story, Meta} from '@storybook/angular/types-6-0';
// import InputTextTableLayoutComponent from '../../../projects/design-system-lib/src/lib/input/table-layout/input-text-table-layout.component';
// import {InputTextComponent} from 'projects/design-system-lib/src/public-api';
// import * as InputTextStories from './input-text.stories';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material/input';
// import {ReactiveFormsModule, Validators} from '@angular/forms';
// import {IconModule} from 'projects/design-system-lib/src/public-api';
//
// export default {
//   title: 'Components/Input/Table',
//   component: InputTextTableLayoutComponent,
//   decorators: [
//     moduleMetadata({
//       declarations: [InputTextTableLayoutComponent],
//       imports: [CommonModule,
//         MatInputModule,
//         BrowserAnimationsModule,
//         MatFormFieldModule,
//         ReactiveFormsModule,
//         IconModule
//       ],
//     }),
//   ],
// } as Meta;
//
// const PageTemplate: Story<InputTextTableLayoutComponent> = (args: InputTextTableLayoutComponent) => ({
//   props: args,
// });
//
// export const Table = PageTemplate.bind({});
// Table.args = {
//   inputTablePage: {
//     simple: {
//       title: 'Resolution',
//       table: [
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text', validators: Validators.email }
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text', validators: Validators.email}
//         },
//         {
//           tableHeader: 'Cell long long Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell long long Label', errorMessage: 'Validation text', validators: Validators.email}
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text', validators: Validators.email}
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text', validators: Validators.email}
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text', validators: Validators.email}
//         }
//       ]
//     },
//     complex: {
//       title: 'Resolution',
//       table: [
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text'}
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text'}
//         },
//         {
//           tableHeader: 'Cell long long Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell long long Label', errorMessage: 'Validation text'}
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text'}
//         },
//         {
//           tableHeader: 'Cell long long Label Cell long long Label Cell long Label Cell long Label Cell long Label Cell long Label',
//           tableData: {
//             ...InputTextStories.NoLabel.args,
//             ariaLabel: 'Cell long long Label Cell long long Label Cell long Label Cell long Label Cell long Label Cell long Label',
//             errorMessage: 'Validation text'
//           }
//         },
//         {
//           tableHeader: 'Cell Label',
//           tableData: {...InputTextStories.NoLabel.args, ariaLabel: 'Cell Label', errorMessage: 'Validation text'}
//         }
//       ]
//     }
//   }
// };
//
//
