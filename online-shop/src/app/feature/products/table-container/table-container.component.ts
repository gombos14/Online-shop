import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsData } from '../model/products.data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private snackbar: MatSnackBar
  ) {}

  products: ProductsData[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {
        this.snackbar.open('Successfully deleted');
        this.loadProducts();
      },
      (error) => this.snackbar.open('Successfully deleted')
    );
  }
}
