import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  roles = [
    {label: 'Super Admin', value: 'admin'},
    {label: 'Airlines Manager', value: 'manager'},
    {label: 'Airlines Check In Staff', value: 'checkin'},
    {label: 'System Configurator', value: 'configurator'},
    {label: 'Passanger', value: 'passanger'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
