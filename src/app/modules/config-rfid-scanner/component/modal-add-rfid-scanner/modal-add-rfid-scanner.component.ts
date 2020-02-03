import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-rfid-scanner',
  templateUrl: './modal-add-rfid-scanner.component.html',
  styleUrls: ['./modal-add-rfid-scanner.component.scss']
})
export class ModalAddRfidScannerComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
