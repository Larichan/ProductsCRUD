import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from '../../product/product.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  @Input() readonly: boolean = false

  @Input() productInput: Product = {
    name: '',
    price: 0.00
  }
}
