import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalAddRfidScannerComponent } from '@modules/config-rfid-scanner/component/modal-add-rfid-scanner/modal-add-rfid-scanner.component';

@Component({
  selector: 'app-config-rfid-scanner',
  templateUrl: './config-rfid-scanner.component.html',
  styleUrls: ['./config-rfid-scanner.component.scss']
})
export class ConfigRfidScannerComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  add() {
    const modalRef = this.modalService.open(ModalAddRfidScannerComponent);
    modalRef.componentInstance.name = 'World';
  }
}