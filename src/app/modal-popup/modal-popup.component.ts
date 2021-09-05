import { TitleCasePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dialogue } from '../models/dialog.model';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent {  
  constructor(
    public dialogRef: MatDialogRef<ModalPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialogue,
    public titleCasePipe: TitleCasePipe) {}

  get caption() {
    return this.data.isInputVisisble ? this.data.caption : `${this.data.caption} ${this.data.value}`;
  } 

  onNoClick(): void {
    this.dialogRef.close();
  }

  isButtonEnabled() {
    return (this.data && this.data.value && this.data.value.length >= 2) || !this.data.isInputVisisble;
  }

  keyPress(event) {    
    var charCode = (event.which) ? event.which : event.keyCode;
    // initially Only Numbers 0-9
    if (this.data && !this.data.value) {
      if ((charCode < 49 || charCode > 57)) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
    
  }

}