import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Guid } from 'src/app/Helpers/guid';
import { Phone } from 'src/app/models/phone';
import { PhoneType } from 'src/app/models/phone-type/phone-type';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.scss']
})
export class PhoneItemComponent {
  phoneTypes: PhoneType = new PhoneType();
  selectEdit:boolean= false;
  @Input() item: Phone = {
    id: Guid.newGuid(),
    name: '',
    surName: '',
    patronymic: '',
    phoneNumber: '',
    typePhone: ''
  };
  @Output() removed:EventEmitter<Guid> = new EventEmitter();
  onRemovePhone():void{
    this.removed.emit(this.item.id);
    console.log("onRemove")
  }
  @Output() edit:EventEmitter<Phone> = new EventEmitter();
  onEditPhone(type:string):void{
    this.item.typePhone=type;
    this.edit.emit(this.item);
    console.log("onEditPhone")
    this.selectEdit=!this.selectEdit;
  }
  
}
