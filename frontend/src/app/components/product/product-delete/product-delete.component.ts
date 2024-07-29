import { Component } from '@angular/core';
import { ProductFormComponent } from '../../template/product-form/product-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [ProductFormComponent, MatCardModule, MatButtonModule],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {

  product: Product = {
    name: '',
    price: 0
  };

  constructor(private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id')
      this.productService.readById(id!).subscribe(result => {
        this.product = result
      })
    }
  
    deleteProduct(): void {
      this.productService.delete(this.product.id!.toString()).subscribe(() => {
        this.productService.showMessage('Produto deletado com sucesso!')
        this.router.navigate(['/products'])
      })
    }
  
    cancel() {
      this.router.navigate(['/products'])
    }
}
