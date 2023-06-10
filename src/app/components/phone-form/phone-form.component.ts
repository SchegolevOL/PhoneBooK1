import { Component, EventEmitter, Output } from '@angular/core';
import { Guid } from 'src/app/Helpers/guid';
import { Phone } from 'src/app/models/phone';
import { PhoneType } from 'src/app/models/phone-type/phone-type';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.scss'],
})
export class PhoneFormComponent {
  phoneTypes: PhoneType = new PhoneType();
   @Output() added: EventEmitter<Phone> = new EventEmitter();
  phone: Phone = {
    id: Guid.newGuid(),
    name: '',
    surName: '',
    patronymic: '',
    phoneNumber: '',
    typePhone: '',
  };
  
  onFormSubmint(type:string): void {
    console.log(this.phone);
    this.phone.typePhone=type;
    this.added.emit(this.phone);
    this.phone.name="";
    this.phone.surName="";
    this.phone.patronymic="";
    this.phone.phoneNumber="";
    this.phone.typePhone="";
  }
}
