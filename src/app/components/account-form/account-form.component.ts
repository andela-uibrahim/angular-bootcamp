import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  ngOnInit() {
    this.data = {
      title: "",
      desc: "",
      bal: 0
    }
  }
  @Output('created') created = new EventEmitter<Object>()
  @Input('error') error:string;
  @ViewChild('form') form:ElementRef;

  private data:Data;

  private submit(){
    this.created.emit(this.data);
    return false;
  }

  public resetForm(){
    this.form.nativeElement.reset();
  }

  

}



interface Data {
  title: string,
  desc: string,
  bal: number
}