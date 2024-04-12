import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Item} from '../item.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  item: Item = { id: 0, name: '', mobile: '' };

  constructor(private itemService:ItemService,
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
     const itemId = Number(this.route.snapshot.paramMap.get('id'));
    //  item data from service
    this.item = this.itemService.getItems().find(item => item.id == itemId) || { id: 0, name: '', mobile: '' };
    console.log( itemId, this.itemService.getItems());

  }
  saveChanges(): void {
    this.itemService.updateItem(this.item);
    console.log(this.itemService.updateItem(this.item));
    this.router.navigate(['/list']); // redirect
  }

}
