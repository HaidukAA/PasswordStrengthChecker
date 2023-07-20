import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent {

  form!: FormGroup;
  strengths: string[] = [];

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('')
    });
  }
}
