import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {IAlert} from './alert.interface';

@Component({
  selector: 'p-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})

export class AlertComponent {
  constructor(private snackBarRef: MatSnackBarRef<AlertComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: IAlert){}

  onAction(): void {
    alert('The snack-bar action was triggered!');
  }

  dismiss(): void {
    this.snackBarRef.dismiss();
  }
}
