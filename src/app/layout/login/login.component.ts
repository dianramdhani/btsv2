import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = [
    { label: 'Super Admin', value: 'admin' },
    { label: 'Airlines Manager', value: 'manager' },
    { label: 'Airlines Check In Staff', value: 'checkin' },
    { label: 'System Configurator', value: 'configurator' },
    { label: 'Passanger', value: 'passanger' },
  ];
  formLogin: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      role: new FormControl('', Validators.required)
    });
  }

  apply() {
    const { role } = this.formLogin.value;
    switch (role) {
      case 'admin':
        this.router.navigate(['/super-admin/baggage-tracking']);
        break;

      default:
        break;
    }
  }

}
