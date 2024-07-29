import { Component, OnInit, ViewChild, LOCALE_ID } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import localePt from '@angular/common/locales/pt';
import { RouterModule } from '@angular/router';

registerLocaleData(localePt)

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Product>([]);
  totalProducts = 0
  pageIndex = 0
  pageSize = 2


  displayedColumns = ['name', 'price', 'actions'];

  constructor(private service: ProductService) { }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    this.service.readPaginated(this.pageIndex + 1, this.pageSize).subscribe(response => {
      console.log(response)
      this.totalProducts = response.items
      this.dataSource.data = response.data
    })
  }

  pageChangeEvent(event: PageEvent) {
    console.log('evento chamado')
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.getPagedData();
  }

  getPagedData() {
    this.service.readPaginated(this.pageIndex + 1, this.pageSize).subscribe(result => {
      console.log(result)
      this.totalProducts = result.items
      this.dataSource.data = result.data
      console.log(this.dataSource.paginator)
    })
  }
}
