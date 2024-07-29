import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { ProductFormComponent } from "../../template/product-form/product-form.component";

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, ProductFormComponent],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: 0.00
  }

  constructor(private router: Router,
    private productService: ProductService
  ) {}

  navigateBackToProductCrud() {
    this.router.navigate(['/products'])
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }
}
