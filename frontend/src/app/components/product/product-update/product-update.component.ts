import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ProductFormComponent } from "../../template/product-form/product-form.component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ProductFormComponent, MatCardModule, MatButtonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(result => {
      this.product = result
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto alterado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
