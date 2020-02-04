import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';

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
  public exampleData: Array<Select2OptionData>;
  options: Select2Options = {
    width: '100%'
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      role: new FormControl('', Validators.required)
    });

    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
  }

  apply() {
    const { role } = this.formLogin.value;
    switch (role) {
      case 'admin':
        this.router.navigate(['/super-admin/baggage-tracking']);
        break;

      case 'passanger':
        this.router.navigate(['/passanger']);
        break;

      default:
        break;
    }
  }

}
