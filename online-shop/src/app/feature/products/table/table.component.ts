import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsData } from '../model/products.data';
import { ProductModelDialogComponent } from '../product-model-dialog/product-model-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailData } from '../model/product-detail.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() data: ProductsData[] = [];
  @Input() isAdmin: boolean = true;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() updatedProduct: EventEmitter<ProductDetailData> =
    new EventEmitter<ProductDetailData>();

  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'delete'];
  constructor(private dialog: MatDialog) {}

  deleteProduct(id: number): void {
    this.delete.emit(id);
  }

  openModalDialog(id: number) {
    const dialogRef = this.dialog.open(ProductModelDialogComponent, {
      width: '60%',
      height: '75%',
      data: { id, primaryButton: 'Update', admin: this.isAdmin },
    });

    dialogRef.afterClosed().subscribe((data: ProductDetailData) => {
      if (data) this.updatedProduct.emit(data);
    });
  }
}
