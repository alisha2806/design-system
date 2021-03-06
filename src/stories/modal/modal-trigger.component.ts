import {Component, Input} from '@angular/core';
import {IModalData} from 'projects/design-system-lib/src/lib/modal/modal.interface';
import {ModalEnum} from 'projects/design-system-lib/src/lib/modal/modal.enum';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from 'projects/design-system-lib/src/lib/modal/modal.component';
import {ButtonTypeEnum} from '../../../projects/design-system-lib/src/lib/button/button-type.enum';

@Component({
  selector: 'modal-trigger',
  templateUrl: './modal-trigger.component.html',
  styleUrls: ['./modal-trigger.component.scss']
})
export class ModalTriggerComponent {
  @Input() data: IModalData;
  @Input() type: ModalEnum; // required
  @Input() panelClass: string | string[];
  @Input() triggerBtnName: string;
  public buttonType = ButtonTypeEnum;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.panelClass = ['p-modal', 'p-modal-' + this.type];
    const dialogRef = this.dialog.open(ModalComponent, {
      data: this.data,
      panelClass: this.panelClass, // required
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
