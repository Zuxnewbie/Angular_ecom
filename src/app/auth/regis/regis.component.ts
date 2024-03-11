import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterForm } from '../auth';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    comfirm_password: ''
  }
  constructor(private authService: AuthService) { }
  submit() {
    this.authService.register(this.form)
  }
}
