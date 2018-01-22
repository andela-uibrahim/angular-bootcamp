import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'accounts-list.component.html',
  styleUrls:['accounts-list.component.css']
})

export class AccountsList {
  @Input('accounts') _accounts:Array<Account>;
  @Output('delete') delete = new EventEmitter<Number>()

  private _remove(index: number) {
    this.delete.emit(index);
  }

}
