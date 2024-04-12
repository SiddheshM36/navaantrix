import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
//import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  items!: any[];

  constructor(private itemService: ItemService, private router: Router) { }

  //get all data
  ngOnInit(): void {
    this.items = this.itemService.getAllItems();
    console.log(this.items);
    //this.fetchItems();
  }

  //delete data
  onDelete(id: number): void {
    this.itemService.deleteItem(id);
    this.items = this.itemService.getAllItems();
  }
  //edit component

  editItem(id: number) {
    this.itemService.updateItem(id);
    this.router.navigate(['/edit', id]);
  }
}
