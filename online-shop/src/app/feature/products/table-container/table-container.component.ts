import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsData } from '../model/products.data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductDetailData } from '../model/product-detail.data';
import { MatDialog } from '@angular/material/dialog';
import { Roles } from '../../users/model/user-data';
import { ProductModelDialogComponent } from '../product-model-dialog/product-model-dialog.component';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
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
      (error) => this.snackbar.open(error)
    );
  }

  updateProduct(product: ProductDetailData) {
    this.productService.updateProduct(product).subscribe(
      () => {
        this.loadProducts();
        this.snackbar.open('Successfully updated');
      },
      (error) => this.snackbar.open('Failed')
    );
  }

  isAdmin() {
    const obj = localStorage.getItem('user');
    if (obj) {
      const user = JSON.parse(obj);
      return user.roles.includes(Roles.ADMIN);
    }
    return false;
  }

  openModalDialog() {
    const dialogRef = this.dialog.open(ProductModelDialogComponent, {
      width: '50%',
      height: '40%',
      data: { primaryButton: 'Add', admin: this.isAdmin() },
    });

    dialogRef.afterClosed().subscribe((data: ProductDetailData) => {
      if (data) {
        this.productService.addProduct(data).subscribe(
          (data) => {
            this.loadProducts();
            this.snackbar.open('Product was successfully added');
          },
          (error) => this.snackbar.open('Failed to add product')
        );
      }
    });
  }
}
