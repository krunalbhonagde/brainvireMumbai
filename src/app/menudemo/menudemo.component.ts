import { ModalPopupService } from './../modal-popup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menudemo',
  templateUrl: './menudemo.component.html',
  styleUrls: ['./menudemo.component.css']
})
export class MenudemoComponent implements OnInit {
  tagIdS: any = [];
  constructor( private modalService: ModalPopupService) { }

  ngOnInit() {

  }

  
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  updateTag(event) {
     this.tagIdS.push(event);
  }

}
