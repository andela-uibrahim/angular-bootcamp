import {Component, ViewChild} from '@angular/core';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { Account } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css'],
})
export class AppComponent {

  private _accounts:Array<Account> = [{
    id:1,
    title:"xxx Bank",
    description:"Main bank account.",
    balance:567
    },
    {
    id:2,
    title:"yyy Bank",
    description: null,
    balance: 322
  }];

  private _nextId = 3;

  private createError:string = ""
  private accLimit:number= 3

  private createAcc(data:Data){
    this.createError = ""
    if(this._accounts.length < this.accLimit){
      this._accounts.push(new Account(this._nextId, data.title, data.desc, data.bal))
      this._nextId++
      this.form.resetForm();
    }
    else {
      this.createError = `only ${this.accLimit} account(s) allowed.`
    }
    
  }
  private removeAcc(index:number){
    this._accounts.splice(index, 1)
  }
  @ViewChild(AccountFormComponent) form:AccountFormComponent;
}

interface Data {
  title: string,
  desc: string,
  bal: number
}