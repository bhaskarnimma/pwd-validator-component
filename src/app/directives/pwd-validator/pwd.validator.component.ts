import {Component, OnInit, OnChanges, SimpleChanges, Input, Output} from "@angular/core";
@Component({
  selector: 'pwd-validator-container',
  template: `
    <div *ngIf="canShow" class="pwd-validator-container">
      
      <div>Your password must:</div>
      <br/>
      <div [ngStyle]="{'color' : isLessThan8Chars ? 'red': 'green'}">Be at least 8 characters</div>
      <div [ngStyle]="{'color' : !isLessThan20Chars ? 'red': 'green'}">Not be longer than 20 characters</div>
    </div>
  `,
  styleUrls: ['./pwd.validator.component.css']
})
export class PasswordValidatorContainerComponent implements OnInit,  OnChanges {

  @Input('pwdValue') public pwdValue:any[];

  public pwdValid:boolean;

  canShow:boolean = false;
  isLessThan8Chars:boolean = false;
  isLessThan20Chars:boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.pwdValue != undefined && this.pwdValue.length > 0 ) {
      this.validatePassword();
      this.canShow = true;
    }else {
      this.canShow = false;
    }

    this.pwdValid = !this.isLessThan8Chars && this.isLessThan20Chars;
  }

  validatePassword():void {
    this.isLessThan8Chars = this.pwdValue.length < 8;
    this.isLessThan20Chars = this.pwdValue.length < 20;

  }

}
