import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-validation-bar',
  templateUrl: './validation-bar.component.html',
  styleUrls: ['./validation-bar.component.scss']
})
export class ValidationBarComponent {
  @Input() password: string | undefined;
  strengthColors: string[] = [];
  strengthLabel: string = '';

  private noPassword = ["grey", "grey", "grey"];
  private invalidPassword = ["red", "red", "red"];
  private easyPassword = ["red", "grey", "grey"];
  private mediumPassword = ["yellow", "yellow", "grey"];
  private strongPassword = ["green", "green", "green"];

  private regexEasyPassword = /^[a-zA-Z]+$|^[\d]+$|^[\W_]+$/i;
  private regexStrongPassword = /(?=.*[a-zA-Z])(?=.*[\W_])(?=.*[\d])/;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['password']) {
      this.strengthColors = this.onChangePasswordStrength();
    }
  }

  onChangePasswordStrength() {
    if (!this.password) {
      return this.noPassword;
    } else if (this.password.length < 8) {
      this.strengthLabel = 'Add more characters';
      return this.invalidPassword;
    } else if (this.regexEasyPassword.test(this.password)) {
      this.strengthLabel = 'Password is easy';
      return this.easyPassword;
    } else if (this.regexStrongPassword.test(this.password)) {
      this.strengthLabel = 'Password is strong';
      return this.strongPassword;
    }
    this.strengthLabel = 'Password is medium';
    return this.mediumPassword;
  }
}
