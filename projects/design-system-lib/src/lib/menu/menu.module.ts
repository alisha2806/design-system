import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MenuComponent} from './menu/menu.component';
import {MenuMultiSelectComponent} from './menu-multi-select/menu-multi-select.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../button/button.module';
import {IconModule} from '../icon/icon.module';
import {MenuTabsComponent} from './menu-tabs/menu-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    ButtonModule,
    IconModule
  ],
  declarations: [
    MenuComponent,
    MenuMultiSelectComponent,
    MenuTabsComponent
  ],
  exports: [
    MenuComponent,
    MenuMultiSelectComponent,
    MenuTabsComponent
  ]
})
export class MenuModule { }
