import { Component, EventEmitter, Output } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Router, ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  id: any = null;
  name: string = '';
  mobile: string = '';

  constructor(private itemService: ItemService, private router: Router, private ActivatedRoute: ActivatedRoute) { }

  onSubmit(): void {
    const newItem: Item = { id: this.id, name: this.name, mobile: this.mobile };
    if (!this.itemService.isIdUnique(newItem.id)) {
      alert('ID must be unique');

    }
    else {
      this.itemService.addItem(newItem);
      console.log(newItem);
      //this.router.navigate(['/list']);
      this.resetForm();

      console.log(this.itemService.isIdUnique(this.id));

    }
  }

  resetForm(): void {
    this.id = 0;
    this.name = '';
    this.mobile = '';
  }
}
