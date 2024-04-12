import { Injectable } from '@angular/core';
import { Item } from './item.model';


@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private items: Item[] = [];

  constructor() { }
// Method to add a new item
addItem(item: Item): void {
  this.items.push(item);
}
  getItems(): Item[] {
    return this.items;
    console.log(this.items);
  }
  // created service for get all records

  getAllItems(): any[] {
    return this.items;
  }
//unique id

isIdUnique(uniqueid: number): boolean {
   let allItems = this.getAllItems()
   console.log(allItems);
  return !allItems.find(item => item.id === uniqueid);


  //return this.getItems().find(item => item.id === itemId);
}  
  // delete record
  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
    
  }

  //update record
 
  updateItem(updatedItem: any): void {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }
}
