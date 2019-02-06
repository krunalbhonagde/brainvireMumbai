import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service'

@Component({
  selector: 'app-modal-data-component',
  templateUrl: './modal-data-component.component.html',
  styleUrls: ['./modal-data-component.component.css']
})
export class ModalDataComponentComponent implements OnInit {
  userList: any;
  model: any = {};
  selectedEntry;
  serachTag: String = "";
  @Output() getTag = new EventEmitter();
  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.getCustomerById()
    .subscribe(data => {
      this.userList = data;
    })
    
  }

  onSelectionChange(entry) {
     this.selectedEntry = entry;
     this.getTag.emit(this.selectedEntry);
  }

}
