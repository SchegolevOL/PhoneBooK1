import { Injectable } from '@angular/core';
import { Phone } from '../models/phone';
import { Guid } from '../Helpers/guid';

@Injectable({
  providedIn: 'root'
})
export class TbookRepositoryService {
  private _phoneBook:Array<Phone>=[];

  constructor() { }

  public get PhoneBook():Array<Phone>{
    return this._phoneBook;
  }

  add(phone:Phone){
    console.log("Add")
    console.log(phone)
   
    if (phone.name!=""&&phone.phoneNumber!=""){
      this._phoneBook.push(phone);
    }
      console.log(this._phoneBook) 
     
   
  }
  edit(phone:Phone){
    console.log("Add")
    console.log(phone)
   
    if (phone.name!=""&&phone.phoneNumber!=""){
      for (let i = 0; i < this._phoneBook.length; i++) {
        if (this._phoneBook[i].id == phone.id) {
          this._phoneBook[i] = phone;
        }
        
      }
    }
      console.log(this._phoneBook) 
     
   
  }

  remove(id:Guid){
    console.log("remove item")
    this._phoneBook = this._phoneBook.filter(x => x.id != id);

  }
  save():void{
    localStorage.setItem("list", JSON.stringify(this._phoneBook));
  }
  load():void{
    let json = localStorage.getItem("list");
    if (json) {
      this._phoneBook = JSON.parse(json);
    }
  }

  
}
