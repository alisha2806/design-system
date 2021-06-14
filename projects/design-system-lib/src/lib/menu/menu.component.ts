import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';
import {SubscriptionLike} from 'rxjs';

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy{
  @Input() menuList: any[];
  @Input() groupTitle: boolean = false; //if there is a group title
  @Input() filter: boolean = false; // if there is a search and buttons
  public filteredList: any[];
  public formFieldControl: FormControl;
  private sub: SubscriptionLike;

  ngOnInit(): void {
    this.filteredList = this.menuList;
    if (this.filter) {
      this.formFieldControl = new FormControl('');
      this.sub = this.formFieldControl.valueChanges.subscribe((value: string) => {
        this.alterList(value);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.filter && this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  alterList(value: string): void {
    this.filteredList = [];
    this.menuList.forEach(group => {
      const filteredGroup = group.names.filter( name => name.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      if (filteredGroup.length > 0) {
        this.filteredList.push(Object.assign({}, group, group.names = filteredGroup));
      }
    });
  }
}
