import { Component, OnInit } from '@angular/core';
import { Guid } from 'src/app/Helpers/guid';
import { Phone } from 'src/app/models/phone';
import { TbookRepositoryService } from 'src/app/services/tbook-repository.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  constructor(public bookRepositoryService:TbookRepositoryService) {
    console.log("constructor");
  }

  ngOnInit(): void {
    this.bookRepositoryService.load();
  }
  addPhone(phone:Phone):void{
this.bookRepositoryService.add(phone);
this.bookRepositoryService.save();
this.bookRepositoryService.load();
  }

  removePhone(id:Guid): void {
    this.bookRepositoryService.remove(id)
    this.bookRepositoryService.save();
  }
  addEdit(phone:Phone):void{
    this.bookRepositoryService.edit(phone);
    this.bookRepositoryService.save();
    this.bookRepositoryService.load();
      }
      editPhone(phone:Phone):void{
        this.bookRepositoryService.edit(phone);
        this.bookRepositoryService.save();
        this.bookRepositoryService.load();
      }
}
